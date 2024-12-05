import React from "react";
import '../css/StyleDetail.css';

const StyleDetail= () => {
    return (
        <article>
        <section className="social_title">
{/* ---------------------social_head-----------------  */}
            <div className="social_head">
                <div className="StyleDetail_profile_img"><img src="https://cdn.4mation.net/profile/image/tmdals4872_7de6ba24-cec8-4862-89f3-e303a4ff8e01.png?s=100x100&q=100"  alt="" /></div>
                <div className="StyleDetail_profile_text">
                    <p className="StyleDetail_profile_id">under_lapping </p>
                    <p className="registration_time">2024년 8월 20일</p>
                </div>

                <button className="StyleDetail_follow_btn">팔로우</button>
            </div>
{/* ----------------------social_body-----------------  */}
            <div className="social_body">

                {/* <div className="main_img"><img src="https://fakeimg.pl/640x640/"  alt="" /></div>  */}
                <div className="StyleDetail_main_img"><img src="https://cdn.4mation.net/market/mainimage/sethb_72b2f7b4-6221-4b3d-8a64-319ba82bd7e1_1045x1436.jpeg" alt="" /></div>
                <div className="StyleDetail_main_img_list">JS해야하는  . . .</div>
            </div>

 {/* ---------------------interest-----------------  */}
            <div className="StyleDetail_interest">
                <div className="StyleDetail_interest_like"><span>하트</span>11</div>
                <div className="StyleDetail_interest_attention"><span>댓글</span></div>
                <div className="StyleDetail_interest_comment"><span>관심</span></div>
            </div>
 {/* ---------------------social_text-----------------     */}
            <div className="social_text">
                <h2 className="StyleDetail_text_title">코듀로이의 계절 셔츠도 코듀로이로</h2>
                <p className="StyleDetail_text_tag">#겨울데일리 #겨울코디추천 #아우터추천 #연말선물 #연말룩 #신발리뷰 #사이즈팁 #요즘신발 #KICKS #남자코디 #겨울남자코디 #남자겨울코디 #남자데일리룩</p>
            </div>
        </section>
 {/* ----------------------------social_container----------------------------  */}
        <section className="social_container">
            <div className="StyleDetail_container_title">@j_0_x_0님의 다른 스타일</div>
            <div className="StyleDetail_container_img">
                    <div><a href="#"><img src="https://cdn.4mation.net/market/mainimage/sethb_72b2f7b4-6221-4b3d-8a64-319ba82bd7e1_1045x1436.jpeg" alt="" /></a></div>
                    <div><a href="#"><img src="https://fakeimg.pl/150x200/" alt="" /></a></div>
                    <div><a href="#"><img src="https://fakeimg.pl/150x200/" alt="" /></a></div>
                    <div><a href="#"><img src="https://fakeimg.pl/150x200/" alt="" /></a></div>
            </div>
        </section>
    </article>

    )
}

export default StyleDetail;
