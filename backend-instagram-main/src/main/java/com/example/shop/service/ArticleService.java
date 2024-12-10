package com.example.shop.service;

import com.example.shop.domain.instagram.*;
import com.example.shop.domain.shop.Item;
import com.example.shop.dto.instagram.article.ArticleDetailResponseDto;
import com.example.shop.dto.instagram.article.ArticleItemResponseDto;
import com.example.shop.dto.instagram.article.ArticleRequestDto;
import com.example.shop.dto.instagram.article.ArticleSummaryResponseDto;
import com.example.shop.dto.instagram.comment.CommentRequestDto;
import com.example.shop.dto.instagram.comment.CommentResponseDto;
import com.example.shop.exception.NotFoundException;
import com.example.shop.repository.article.ArticleRepository;
import com.example.shop.repository.comment.CommentRepository;
import com.example.shop.service.image.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final CommentRepository commentRepository;
    private final ImageService imageService;
    private final ValidationService validationService;

    /** 게시글 생성 */
    @Transactional
    public void saveArticle(Long memberId, ArticleRequestDto dto, List<MultipartFile> articleImages) {
        Member member = validationService.validateMemberById(memberId);

        if (articleImages == null || articleImages.isEmpty() || articleImages.stream().allMatch(MultipartFile::isEmpty)) {
            throw new IllegalArgumentException("게시글에는 최소 1장의 이미지가 필요합니다.");
        }

        List<ArticleImg> articleImgs = imageService.saveArticleImgs(articleImages);

        List<ArticleTag> articleTags = dto.getHashtags().stream()
                .map(tagName -> {
                    Tag tag = validationService.validateTagByName(tagName);
                    return ArticleTag.createArticleTag(tag);
                })
                .toList();

        List<ArticleItem> articleItems = dto.getItemIds().stream()
                .map(itemId -> {
                    Item item = validationService.validateItemById(itemId);
                    return ArticleItem.createArticleItem(item);
                })
                .toList();

        Article article = Article.createArticle(member, articleImgs, dto.getContent(), articleTags, articleItems);
        articleRepository.save(article);
    }

    /** 게시글 댓글 작성 */
    @Transactional
    public void saveComment(Long memberId, Long articleId, CommentRequestDto dto, MultipartFile file) {
        Member member = validationService.validateMemberById(memberId);
        Article article = validationService.validateArticleById(articleId);

        CommentImg commentImg = null;
        if (file != null && !file.isEmpty()) {
            if (dto.getContent() == null || dto.getContent().trim().isEmpty()) {
                throw new IllegalArgumentException("댓글에는 글 또는 이미지 중 하나가 반드시 포함되어야 합니다.");
            }
            commentImg = imageService.saveCommentImg(file);
        }

        Comment comment = Comment.createComment(article, member, dto.getContent(), null, commentImg);

        commentRepository.save(comment);
    }

    /** 게시글 수정 */
    @Transactional
    public void updateArticle(Long memberId, Long articleId, ArticleRequestDto dto, List<MultipartFile> articleImages) {
        if (articleImages == null || articleImages.isEmpty() || articleImages.stream().allMatch(MultipartFile::isEmpty)) {
            throw new IllegalArgumentException("게시글에는 최소 1장의 이미지가 필요합니다.");
        }

        Article article = validationService.validateArticleAndMemberById(articleId, memberId);

        if (!article.getMember().getId().equals(memberId)) {
            throw new IllegalArgumentException("수정할 권한이 없습니다.");
        }

        List<ArticleImg> articleImgs = imageService.updateArticleImgs(article, articleImages);
        article.updateArticleImages(articleImgs);

        if (!dto.getContent().equals(article.getContent())) {
            article.updateArticle(dto.getContent());
        }

        List<ArticleTag> newTags = dto.getHashtags().stream()
                .map(tagName -> {
                    Tag tag = validationService.validateTagByName(tagName);
                    return ArticleTag.createArticleTag(tag);
                })
                .toList();
        article.updateArticleTags(newTags);

        List<ArticleItem> newItems = dto.getItemIds().stream()
                .map(itemId -> {
                    Item item = validationService.validateItemById(itemId);
                    return ArticleItem.createArticleItem(item);
                })
                .toList();
        article.updateArticleItems(newItems);
    }

    /** 게시글 단건 조회 */
    @Transactional
    public ArticleDetailResponseDto getArticle(Long memberId, Long articleId) {
        Article article = articleRepository.findArticleWithWriterById(memberId, articleId)
                .orElseThrow(() -> new IllegalArgumentException("등록된 게시글이 아니거나 차단된 게시글입니다."));

        if (article.getArticleStatus() != ArticleStatus.ACTIVE) {
            throw new NotFoundException("비공개 되거나 삭제된 게시글입니다.");
        }

        article.incrementViewCounts();

        List<String> articleImages = article.getArticleImages().stream()
                .map(ArticleImg::getImgUrl)
                .toList();

        List<String> hashTags = article.getArticleTags().stream()
                .map(articleTag -> articleTag.getTag().getTag())
                .toList();

        List<ArticleItemResponseDto> items = article.getArticleItems().stream()
                .map(articleItem -> ArticleItemResponseDto.createDto(articleItem.getItem().getId(), articleItem.getItem().getName(),
                        articleItem.getItem().getPrice(), articleItem.getItem().getRepItemImage())).toList();

        long articleCommentsCount = commentRepository.countByArticleId(articleId);
        Long likeId = validationService.findArticleLikeIdByArticleAndMember(articleId, memberId);

        return ArticleDetailResponseDto.createDto(articleId, article.getMember().getId(), article.getMember().getNickname(),
                articleImages, hashTags, items, article.getLikes(), articleCommentsCount, likeId);
    }

    /** 게시글 전체 조회 */
    @Transactional(readOnly = true)
    public Page<ArticleSummaryResponseDto> getArticles(Long memberId, Pageable pageable) {
        Page<Article> articles = articleRepository.findAllArticles(memberId, pageable);

        List<ArticleSummaryResponseDto> dtos = articles.stream()
                .map(article -> {
                    Long likeId = validationService.findArticleLikeIdByArticleAndMember(article.getId(), memberId);

                    return ArticleSummaryResponseDto.createDto(article.getId(), article.getMember().getId(),
                            article.getMember().getNickname(), article.getArticleImages().get(0).getImgUrl(),
                            article.getContent(), article.getLikes(), article.getViewCounts(),likeId);
                })
                .toList();

        return new PageImpl<>(dtos, pageable, articles.getTotalElements());
    }

    /** 게시글 댓글 조회 */
    @Transactional(readOnly = true)
    public Page<CommentResponseDto> getComments(Long memberId, Long articleId, Pageable pageable) {
        Page<Comment> comments = articleRepository.findCommentsByArticleId(articleId, pageable);

        List<CommentResponseDto> dtos = comments.stream()
                .map(comment -> {
                    Long likeId = validationService.findCommentLikeIdByCommentAndMember(comment.getId(), memberId);
                    return CommentResponseDto.createDto(comment.getId(), comment.getMember().getNickname(), comment.getContent(),
                            comment.getCommentImg().getImgUrl(), comment.getLikes(), comment.isReplyComments(), likeId);
                })
                .toList();

        return new PageImpl<>(dtos, pageable, comments.getTotalElements());
    }

    /** 게시글 활성화 */
    @Transactional
    public void activeArticle(Long memberId, Long articleId) {
        Member member = validationService.validateMemberById(memberId);
        Article article = validationService.validateArticleById(articleId);

        if (member.getGrade() == Grade.USER) {
            throw new IllegalArgumentException("게시물을 활성화할 권한이 없습니다.");
        }

        article.activeArticle();
    }

    /** 게시글 비활성화 */
    @Transactional
    public void inactiveArticle(Long memberId, Long articleId) {
        Member member = validationService.validateMemberById(memberId);
        Article article = validationService.validateArticleById(articleId);

        if (member.getGrade() == Grade.USER) {
            throw new IllegalArgumentException("게시물을 비활성화할 권한이 없습니다.");
        }

        article.inActiveArticle();
    }

    /** 게시글 삭제 */
    @Transactional
    public void deleteArticle(Long memberId, Long articleId) {
        Member member = validationService.validateMemberById(memberId);
        Article article = validationService.validateArticleById(articleId);

        if (member.getGrade() == Grade.USER && !article.getMember().equals(member)) {
            throw new IllegalArgumentException("삭제할 권한이 없습니다.");
        }

        imageService.deleteArticleImg(article);
        article.deleteArticle();
    }
}