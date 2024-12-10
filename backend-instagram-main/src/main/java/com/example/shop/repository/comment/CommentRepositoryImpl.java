package com.example.shop.repository.comment;

import com.example.shop.domain.instagram.Comment;
import com.example.shop.domain.instagram.CommentStatus;
import com.example.shop.domain.instagram.QComment;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import java.util.List;
import java.util.Optional;

import static com.example.shop.domain.instagram.QArticle.article;
import static com.example.shop.domain.instagram.QComment.comment;
import static com.example.shop.domain.instagram.QMember.member;

@RequiredArgsConstructor
public class CommentRepositoryImpl implements CommentRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Page<Comment> findReplyCommentsByCommentId(Long commentId, Pageable pageable) {

        List<Comment> replyComments = queryFactory
                .selectFrom(comment)
                .where(comment.parentComment.id.eq(commentId)
                        .and(comment.commentStatus.ne(CommentStatus.DELETED)))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Long> countQuery = queryFactory
                .select(comment.count())
                .from(comment)
                .where(comment.parentComment.id.eq(commentId)
                        .and(comment.commentStatus.ne(CommentStatus.DELETED)));

        return PageableExecutionUtils.getPage(replyComments, pageable, countQuery::fetchOne);
    }

    @Override
    public Optional<Comment> findParentCommentWithArticleByCommentId(Long commentId) {

        QComment parentComment = new QComment("parentComment");

        Comment parent = queryFactory.selectFrom(comment)
                .join(comment.parentComment, parentComment).fetchJoin()
                .join(parentComment.article, article).fetchJoin()
                .where(parentComment.id.eq(commentId))
                .fetchOne();

        return Optional.ofNullable(parent);
    }

    @Override
    public Optional<Comment> validateCommentAndMemberById(Long commentId, Long memberId) {
        Comment result = queryFactory.selectFrom(comment)
                .join(comment.member, member).fetchJoin()
                .where(comment.id.eq(commentId)
                        .and(comment.member.id.eq(memberId)))
                .fetchOne();

        return Optional.ofNullable(result);
    }
}