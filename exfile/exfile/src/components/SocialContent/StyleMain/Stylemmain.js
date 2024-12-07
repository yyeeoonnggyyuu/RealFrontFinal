import React from "react";
import './Stylemmain.css';

const Stylemmain = () => {
    return (
        <>
            <div className="Stylemmain_full_screen">
                {/* -------------------------  banner------------------------  */}
                <div className="Stylemmain_banner">STYLE,banner</div>

                {/* ------------------------- navigation ------------------------  */}

                <div className="Stylemmain_navigation">
                    <li><a href="#">KICKS</a></li>
                    <li><a href="#">팔로잉</a></li>
                    <li><a href="#">발견</a></li>
                    <li><a href="#">랭킹</a></li>
                    <li><a href="#">트렌드</a></li>
                    <li><a href="#">겨울핫템</a></li>
                    <li><a href="#">스니커즈</a></li>
                    <li><a href="#">럭셔리</a></li>
                    <li><a href="#">의류</a></li>
                    <li><a href="#">가방</a></li>
                    <li><a href="#">셀럽스타일</a></li>
                    <li><a href="#">컬렉터블</a></li>
                    <li><a href="#">액세서리</a></li>

                </div>

                {/* ------------------------- keyword_search ------------------------  */}
                <div className="Stylemmain_keyword_search">
                    <div className="Stylemmain_search_list">
                        <a href="#">
                            <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/big/202411/7d090c9573a58fe7fb7553e5cc8ea5b2.jpg" alt="" />
                            <p>스캇&닌텐도 받기</p>
                        </a>
                    </div>



                </div>

                {/* ------------------------ sorting ------------------------  */}
                <div className="Stylemmain_sorting">
                    <span><a href="#">인기순</a></span>
                    <span><a href="#">최신순</a></span>
                </div>


            </div>
            {/* ----------------------SNS 형식 후기글------------------ */}
            <div className="Stylemmain_sns_container">
                <ul className="Stylemmain_detail_page_review_list_body">

                    <li className="Stylemmain_detail_page_review_list_item">
                        <div className="Stylemmain_detail_page_review_list_item_img">
                            <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/big/202411/7d090c9573a58fe7fb7553e5cc8ea5b2.jpg" alt="" />
                        </div>
                        <div className="Stylemmain_detail_page_review_content">

                            <div className="Stylemmain_detail_page_review_title">
                                <img src="https://fakeimg.pl/26x26/" alt="" className="detail_page_review_title_img" />
                                    <span className="detail_page_review_title_id">아이디</span>
                                    <span className="detail_page_review_title_like">♡4</span>
                            </div>
                            <p className="Stylemmain_detail_page_review_body_tag">#겨울코디추천 #겨울코디추천 #아우터추천 #연말선물 #연말룩 #사이즈팁 #KICKS
                            </p>
                        </div>
                    </li>
                    
                </ul>


            </div>
        </>


    );
};

export default Stylemmain;
