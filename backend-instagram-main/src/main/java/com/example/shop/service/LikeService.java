package com.example.shop.service;

import com.example.shop.domain.instagram.*;
import com.example.shop.repository.articlelike.ArticleLikeRepository;
import com.example.shop.repository.commentlike.CommentLikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class LikeService {

    private final ArticleLikeRepository articleLikeRepository;
    private final CommentLikeRepository commentLikeRepository;
    private final ValidationService validationService;

    @Transactional
    public void saveArticleLike(Long memberId, Long articleId) {
        Member member = validationService.validateMemberById(memberId);
        Article article = validationService.validateArticleById(articleId);

        if (validationService.existArticleLikeByArticleIdAndMemberId(articleId, memberId)) {
            throw new IllegalArgumentException("이미 좋아요를 누른 게시물입니다.");
        }

        ArticleLike articleLike = ArticleLike.createArticleLike(member, article);
        articleLikeRepository.save(articleLike);
    }

    @Transactional
    public void saveCommentLike(Long memberId, Long commentId) {
        Member member = validationService.validateMemberById(memberId);
        Comment comment = validationService.validateCommentById(commentId);

        if (validationService.existCommentLikeByCommentIdAndMemberId(commentId, memberId)) {
            throw new IllegalArgumentException("이미 좋아요를 누른 댓글입니다.");
        }

        CommentLike commentLike = CommentLike.createCommentLike(member, comment);
        commentLikeRepository.save(commentLike);
    }

    @Transactional
    public void deleteArticleLike(Long articleLikeId) {
        ArticleLike articleLike = validationService.findArticleLikeWithArticleAndMember(articleLikeId);
        articleLike.cancelLike();
        articleLikeRepository.delete(articleLike);
    }

    @Transactional
    public void deleteCommentLike(Long commentLikeId) {
        CommentLike commentLike = validationService.findCommentLikeWithCommentAndMemberById(commentLikeId);
        commentLike.cancelLike();
        commentLikeRepository.delete(commentLike);
    }
}
