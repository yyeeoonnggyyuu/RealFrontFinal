package com.example.shop.domain.instagram;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 회원
 */
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(unique = true)
    private String userId;
    private String password;
    private String name;

    @Column(unique = true)
    private String nickname;
    private String email;
    private String phone;

    @Embedded
    private Address address;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "member_profile_img_id")
    private MemberProfileImg memberProfileImg;
    private String introduction;

    private int articles; // 게시글 횟수
    private long followees; // 사용자를 팔로우 하는 사람의 수
    private long followers; // 사용자가 팔로우 하는 사람의 수

    @Enumerated(EnumType.STRING)
    private Grade grade;

    @Enumerated(EnumType.STRING)
    private AccountStatus accountStatus;

    @Builder
    private Member(String userId, String password, String name, String nickname, String email, String phone,
                   Address address, MemberProfileImg memberProfileImg, String introduction, Grade grade) {
        this.userId = userId;
        this.password = password;
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.memberProfileImg = memberProfileImg;
        this.introduction = introduction;
        this.grade = grade;
        this.articles = 0;
        this.followees = 0;
        this.followers = 0;
        this.accountStatus = AccountStatus.PRIVATE;
    }

    /** 회원 생성 */
    public static Member createMember(String userId, String password, String name, String nickname, String email,
                                      String phone, Address address) {

        Grade grade = email.contains("@company.com") ? Grade.NO_AUTHORIZATION_ADMIN : Grade.USER;
        return Member.builder().userId(userId).password(password).name(name)
                .nickname(nickname).email(email).phone(phone).address(address).grade(grade).build();
    }

    /**
     * 게시글 수, 팔로워 수 증감 메서드
     */
    protected void setArticles(int articles) {
        this.articles += articles;
    }

    protected void setFollowees(long followees) {
        this.followees += followees;
    }

    protected void setFollowers(long followers) {
        this.followers += followers;
    }

    /** 관리자 승인 (Super Admin 전용 권한) */
    public void promotionAdmin() {
        this.grade = Grade.ADMIN;
    }

    /** 관리자 권한 해제 (Super Admin 전용 권한) */
    public void relegationAdmin() {
        this.grade = Grade.NO_AUTHORIZATION_ADMIN;
    }

    /** 사용자 게시글, 댓글 사용 권한 중지 (관리자 권한) */
    public void suspendedArticle() {
        this.grade = Grade.SUSPENDED_USER;
    }

    /** 사용자 게시글, 댓글 사용 권한 재부여 (관리자 권한) */
    public void restartArticle() {
        this.grade = Grade.USER;
    }

    /** 회원 정보 수정 */
    public void updateMemberInfo(String name, String nickname, String email, String phone, Address address) {
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    /** 프로필 이미지 설정 */
    public void updateMemberProfile(MemberProfileImg memberProfileImg, String introduction) {
        this.memberProfileImg = memberProfileImg;
        this.introduction = introduction;
    }

    /** 프로필 공개 여부 설정 */
    public void updateMemberAccountStatus(AccountStatus accountStatus) {
        this.accountStatus = accountStatus;
    }

    public boolean isAccountStatus() {
        return accountStatus == AccountStatus.PUBLIC;
    }
}
