import React, { useState } from "react";
import './Styleprofile.css';
import ProfileDiv from "./ProfileDiv.js";
import ProfilePosts from './ProfilePosts.js';
import ProfileTags from './ProfileTags.js';

const Styleprofile = () => {
    const [activeTab, setActiveTab] = useState('posts');
    // 게시글 데이터 예시
    const postsData = [
        { 
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "아이디1",
            likes: "♡4",
            tags: "#겨울코디 #아우터추천"
        },
        { 
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "아이디2",
            likes: "♡7",
            tags: "#봄패션 #사이즈팁"
        },
        { 
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "아이디2",
            likes: "♡7",
            tags: "#봄패션 #사이즈팁"
        },
        { 
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "아이디2",
            likes: "♡7",
            tags: "#봄패션 #사이즈팁"
        },
        { 
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "아이디2",
            likes: "♡7",
            tags: "#봄패션 #사이즈팁"
        }
    ];

    // 태그 상품 데이터 예시
    const tagsData = [
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그1",
            likes: "♡2",
            tags: "#추천상품 #태그상품"
        },
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그2",
            likes: "♡5",
            tags: "#여름상품 #핫딜"
        },
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그2",
            likes: "♡5",
            tags: "#여름상품 #핫딜"
        },
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그2",
            likes: "♡5",
            tags: "#여름상품 #핫딜"
        },
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그2",
            likes: "♡5",
            tags: "#여름상품 #핫딜"
        },
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그2",
            likes: "♡5",
            tags: "#여름상품 #핫딜"
        }
    ];



    return (
        <>
            <div className="Styleprofile_full_screen">
                {/* ------------------------- profile------------------------  */}
                <ProfileDiv />
                {/* -----------------------postlist,taglist ------------------------ */}
                {/* 게시글, 태그상품 탭 */}
                <div className="Styleprofile_post_tag">
                    <span
                        className={`Styleprofile_postlist ${activeTab === 'posts' ? 'active' : ''}`}
                        onClick={() => setActiveTab('posts')}
                    >
                        게시글
                        <span>465</span>
                    </span>

                    <span
                        className={`Styleprofile_taglist ${activeTab === 'tags' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tags')}
                    >
                        태그상품
                        <span>96</span>
                    </span>
                </div>

                {/* 탭에 따라 컴포넌트 렌더링 */}
                <div className="Styleprofile_sns_container">
                    {activeTab === 'posts' ? <ProfilePosts posts={postsData} /> : <ProfileTags tags={tagsData} />}
                </div>

            </div>

            {/* ----------------------SNS 형식 후기글------------------ */}
            {/* <div className="Styleprofile_sns_container">
                <ul className="Styleprofile_detail_page_review_list_body">

                    <li className="Styleprofile_detail_page_review_list_item">
                        <div className="Styleprofile_detail_page_review_list_item_img">
                            <img src="https://fakeimg.pl/262x262/" alt="" />
                        </div>
                        <div className="Styleprofile_detail_page_review_content">

                            <div className="Styleprofile_detail_page_review_title">
                                <img src="https://fakeimg.pl/26x26/" alt="" className="Styleprofile_detail_page_review_title_img" />
                                <span className="Styleprofile_detail_page_review_title_id">아이디</span>
                                <span className="Styleprofile_detail_page_review_title_like">♡4</span>
                            </div>
                            <p className="Styleprofile_detail_page_review_body_tag">#겨울코디추천 #겨울코디추천 #아우터추천 #연말선물 #연말룩 #사이즈팁 #KICKS
                            </p>
                        </div>
                    </li>

                </ul>


            </div> */}

        </>
    );
};
export default Styleprofile;

