import React from "react";
import '../css/DetailPage.css';

const DetailPage = () => {
    return (
        <div>  {/* 전체를 하나의 부모 엘리먼트로 감싸기 */}
            <div id="header"></div>
            <div className="full_screen">
                <div className="detail_page">
                    {/* ---------------- 상세페이지 전체 설정 ----------------  */}
                    <div className="product_detail">
                        {/* ----------------상세페이지 이미지----------------  */}
                        <div className="detail_img">
                            <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/big/202404/35b52732a4971e965f2ce448033d881a.jpg" alt="상품 이미지" />
                        </div>
    
                        {/* --------------- 상세페이지 설명글 ----------------  */}
                        <div className="detail_text">
                            <div className="detail_text_header">
                                <h2 id="detail_name">상품이름</h2>
                            </div>
                            <div className="detail_text_seller">
                                <p id="detail_seller">판매자</p>
                            </div>
                            <div className="detail_text_price"><strong id="prdCount_price">0원</strong></div>
    
                            <table className="detail_text_save_list">
                                <tr>
                                    <th className="table_left">적립금</th>
                                    <th className="table_right" id="detail_reward_points">0원(1%)</th>
                                </tr>
                                <tr>
                                    <td className="table_left">배송비</td>
                                    <td className="table_right" id="detail_delivery_fee">0원</td>
                                </tr>
                            </table>
    
                            {/* -----------------사이즈 선택 --------------------- */}
                            <div className="front_option_inner">
                                <table className="product_option_table">
                                    <th style={{ fontSize: '15px' }}>
                                        사이즈 (한국)
                                    </th>
                                    <tr>
                                        <td>
                                            <select id="itemSelector" className="product_option_size" style={{ fontSize: '15px' }}>
                                                <option value="*" selected="">- [필수] 옵션을 선택해 주세요 -</option>
                                                <option value="**" disabled="">-------------------</option>
                                                <option value="item1" data-price="50000">S (95)</option>
                                                <option value="item2" data-price="50000">M (100)</option>
                                                <option value="item3" data-price="50000">L (105)</option>
                                                <option value="item4" data-price="50000">XL (110)</option>
                                                <option value="item5" data-price="50000">XXL (115) [품절]</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                            </div>
    
                            <div className="itemsContainer"></div>
    
                            <div className="total_price">
                                <span className="price_title">총 수량</span>
                                <span className="price_total" id="totalQuantity">0<span>개</span></span>
                            </div>
                            <div className="total_price">
                                <span className="price_title"><strong id="">총 상품금액</strong></span>
                                <span className="price_total"><strong id="totalAmount">0</strong></span>
                            </div>
    
                            <button className="button_detail_buy"><a href="#">바로구매</a></button>
    
                            <div className="sub_button_menu">
                                <button className="like_button"><a href="#">좋아요</a></button>
                                <button className="basket_button"><a href="#">장바구니</a></button>
                                <button className="interest_product_button"><a href="#">관심상품</a></button>
                            </div>
                        </div>
                    </div>
    
                    {/* ----------상품상세설명 후기 버튼------------------  */}
                    <div className="product_detail_description">
                        <div className="button_product_detail_description"><a href="#product_detail_description">상품상세설명</a></div>
                        <div className="button_review"><a href="#review">후 기</a></div>
                    </div>
    
                    {/* ------------상품상세설명란------------------  */}
                    <div className="text_product_detail_description" id="product_detail_description">
                        <div className="text_product_detail_description_img">
                            <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/upload/NNEditor/20240410/E1848BE185A5E18489E185A6E186ABE18490E185B5E186A820E1848BE185A5E1848BE185B0E1848BE185B5.jpg" alt="상세 이미지" />
                        </div>
                    </div>
    
                    {/* ----------------------SNS 형식 후기글------------------ */}
                    <div className="sns_style">
                        <div className="sns_style_title"><a href="#" id="review">스타일</a></div>
                    </div>
                    <div className="detail_page_review_list">
                        <ul className="detail_page_review_list_body">
                            <a href="#">
                                <li className="detail_page_review_list_item">
                                    <div className="detail_page_review_list_item_img">
                                        <img src="https://fakeimg.pl/262x262/" alt="리뷰 이미지" />
                                    </div>
                                    <div className="detail_page_review_content">
                                        <div className="detail_page_review_title">
                                            <img src="https://fakeimg.pl/26x26/" alt="" className="detail_page_review_title_img" />
                                            <span className="detail_page_review_title_id">아이디</span>
                                            <span className="detail_page_review_title_like">♡4</span>
                                            {/* 하트 다시 넣기  */}
                                        </div>
                                        <p className="detail_page_review_body_tag">#겨울코디추천 #겨울코디추천 #아우터추천 #연말선물 #연말룩 #사이즈팁 #KICKS</p>
                                    </div>
                                </li>
                            </a>
                        </ul>
                    </div>
    
                </div>
    
                <button className="scrollToTopBtn" id="scrollToTopBtn">UP</button>
    
            </div>
            <div id="footer"></div>
        </div>
    );
};

export default DetailPage;
