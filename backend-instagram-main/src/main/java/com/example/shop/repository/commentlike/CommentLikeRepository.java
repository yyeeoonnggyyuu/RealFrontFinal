package com.example.shop.repository.commentlike;

import com.example.shop.domain.instagram.Comment;
import com.example.shop.domain.instagram.CommentLike;
import com.example.shop.domain.instagram.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentLikeRepository extends JpaRepository<CommentLike, Long>, CommentLikeRepositoryCustom {
    Optional<CommentLike> findByCommentAndMember(Comment comment, Member member);
}
