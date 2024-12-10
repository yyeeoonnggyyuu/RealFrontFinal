package com.example.shop.repository.article;

import com.example.shop.domain.instagram.Article;
import com.example.shop.domain.instagram.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface ArticleRepositoryCustom {
    Optional<Article> findArticleWithWriterById(Long memberId, Long articleId);
    Page<Comment> findCommentsByArticleId(Long articleId, Pageable pageable);
    Page<Article> findAllArticles(Long memberId, Pageable pageable);
    Optional<Article> validateArticleAndMemberById(Long articleId, Long memberId);
}
