import React from "react"
import "../css/BoardshoppingSearch.css";

const BoardshoppingSearch = () => {
    return (

        <div classNameName="full_screen">
 {/* ------------------Search------------------ */}
            <div className="Benner_list">
 {/* search */}
                    <div className="search">
                        <form action="">
                            <div className="search_container">
                                <input className="search_input" type="text" placeholder="Search" />
                            </div>
                        </form>
                    </div>
                </div>



 {/* ------------------상품 조회수 및 상품 조회------------------ */}

        <div className="Product_ListMenu">
            <div className="prdCount">total <strong>22</strong> items</div>
            <div className="selectArray">
                <div className="sort">
                    <select id="selArray" name="selArray" className="selArray">
                        <option value="" className="selArray_list">신상품
                        </option>
                        <option value="" className="selArray_list">상품명
                        </option>
                        <option value="" className="selArray_list">낮은가격
                        </option>
                        <option value="" className="selArray_list">높은가격
                        </option>
                        <option value="" className="selArray_list">제조사
                        </option>
                        <option value="" className="selArray_list">사용후기
                        </option>
                    </select>
                </div>
                <span className="selArray_displaynone"><a href="#none" className="btnCompare"
                        onclick="EC_ListAction.setProductCompare();">상품비교</a></span>
            </div>
        </div>



        <div className="container">

            <div className="board_list_wrap">
                <div className="board_list">
{/* ------------------아이템 카드------------------  */}


                    <ul className="board_list_body">
                        <li className="item">
                            <div className="board_img">
                                <div className="board_icon">
                                    <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/upload/icon_201911181652054700.gif"
                                        alt="품절" className="sold_out_icon" />
                                </div>
                                <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202404/bc522b3fb66d399ce0d019ccf0e7feef.jpg"
                                    alt="product" className="product_img" />
                            </div>


                            <div className="board_content">
                                <div className="board_title"><a href="#"><strong> 아르헨티나 1994 RETRO AWAY #10
                                            (XS~2XL)</strong></a></div>
                                <div className="board_price">
                                    <span>209,000원</span><span><strong>99,000원</strong></span><span><strong>
                                            53%</strong></span>
                                </div>
                                <div className="board_name">Official Licensed Product</div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="board_img">
                                <div className="board_icon">
                                    <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/upload/icon_201911181652054700.gif"
                                        alt="품절" className="sold_out_icon" />
                                </div>
                                <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/big/202410/3c74955e861f94e99ae72cb3efe0f203.jpg"
                                    alt="product" className="product_img" />
                            </div>
                            <div className="board_content">
                                <div className="board_title"><a href="#"><strong>HUMMEL 토트넘 1985-87 TRACK JACKET
                                            (S~3XL)</strong></a></div>
                                <div className="board_price">
                                    <span></span><span><strong>139,000원</strong></span><span><strong></strong></span>
                                </div>
                                <div className="board_name">Official Licensed Product - TOT RETRO 005</div>
                            </div>

                        </li>
                        <li className="item">
                            <div className="board_img">
                                <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202410/32a9a8ac1572e0c2c07a3fb3c921629a.jpg"
                                    alt="product" className="product_img" />
                            </div>
                            <div className="board_content">
                                <div className="board_title"><a href="#"><strong>ADIDAS 레알마드리드 24/25 LIFE STYLE JERSEY
                                            (S~2XL)</strong></a></div>
                                <div className="board_price">
                                    <span></span><span><strong>159,000원</strong></span><span><strong></strong></span>
                                </div>
                                <div className="board_name"></div>
                            </div>

                        </li>

                        <li className="item">
                            <div className="board_img">
                                <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202408/f5913de50d2054abf467263dcb3866cc.jpg"
                                    alt="product" className="product_img" />
                            </div>
                            <div className="board_content">
                                <div className="board_title"><a href="#"><strong>ADIDAS 맨유 24/25 PRE-MATCH KIT
                                            (L~3XL)</strong></a></div>
                                <div className="board_price">
                                    <span>109,000원</span><span><strong>79,000원</strong></span><span><strong>28%</strong></span>
                                </div>
                                <div className="board_name">Official Licensed Product</div>
                            </div>
                        </li>

                        <li className="item">
                            <div className="board_img">
                                <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202408/340ede867e423221ef6a16f40eb5b18b.jpg"
                                    alt="product" className="product_img" />
                            </div>
                            <div className="board_content">
                                <div className="board_title"><a href="#"><strong>GARMAN 브레시아 칼초 00/01 AWAY #10 BAGGIO
                                            (M~2XL)</strong></a></div>
                                <div className="board_price">
                                    <span></span><span><strong>279,000원</strong></span><span><strong></strong></span>
                                </div>
                                <div className="board_name">Official Licensed Product</div>
                            </div>
                        </li>

                        <li className="item">
                            <div className="board_img">
                                <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202407/89a5202fa213b7e74b0f13f3c44d3c11.jpg"
                                    alt="product" className="product_img" />
                            </div>
                            <div className="board_content">
                                <div className="board_title"><a href="#"></a><strong>ADIDAS 아르헨티나 PRE-MATCH KIT
                                        (M~3XL)</strong></div>
                                <div className="board_price">
                                    <span>109,000원</span><span><strong>79,000원</strong></span><span><strong>28%</strong></span>
                                </div>
                                <div className="board_name">BRAND NEW WITHOUT TAG , Official Licensed Product</div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="board_img">
                                <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202407/035648b2dc99d62481284f47d759f8fe.jpg"
                                    alt="product" className="product_img" />
                            </div>
                            <div className="board_content">
                                <div className="board_title"><a href="#"><strong>ADIDAS 아르헨티나 리버시블 ANTHEM JACKET
                                            (L~3XL)</strong></a></div>
                                <div className="board_price">
                                    <span></span><span><strong>194,000원</strong></span><span></span><strong></strong>
                                </div>
                                <div className="board_name">Official Licensed Product - IW5363</div>
                            </div>

                        </li>

                        <li className="item">
                            <div className="board_img">
                                <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202406/00e004931e85684a96b7c22fcb428f58.jpg"
                                    alt="product" className="product_img" />
                            </div>
                            <div className="board_content">
                                <div className="board_title"><a href="#"><strong>HUMMEL 토트넘 1991 RETRO FA CUP SEMI FINAL
                                            KIT</strong></a></div>
                                <div className="board_price">
                                    <span>119,000원</span><span><strong>99,000원</strong></span><span><strong>17%</strong></span>
                                </div>
                                <div className="board_name">Official Licensed Product - IW0219</div>
                            </div>
                        </li>

                        <li className="item">
                            <div className="board_img">
                                <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202406/a32ac78c19a6e250410a20e36c42f635.jpg"
                                    alt="product" className="product_img" />
                            </div>
                            <div className="board_content">
                                <div className="board_title"><a href="#"><strong>HUMMEL 토트넘 1986 RETRO HOME KIT</strong></a>
                                </div>
                                <div className="board_price">
                                    <span>119,000원</span><span><strong>99,000원</strong></span><span><strong>17%</strong></span>
                                </div>
                                <div className="board_name">Official Licensed Product</div>
                            </div>
                        </li>

                        <li className="item">-
                            <div className="board_img">
                                <img src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202406/335ea86b3ac6cc5d52736e7e6b02ca22.jpg"
                                    alt="product" className="product_img" />
                            </div>
                            <div className="board_content">
                                <div className="board_title"><a href="#"><strong>HUMMEL 토트넘 1988 RETRO AWAY KIT</strong></a>
                                </div>
                                <div className="board_price">
                                    <span>119,000원</span><span><strong>99,000원</strong></span><span><strong>17%</strong></span>
                                </div>
                                <div className="board_name">Official Licensed Product</div>
                            </div>

                        </li>

                        <li className="item">

                        </li>

                    </ul>



                </div>

            </div>
        </div>
{/* ---------------페이징 처리-------------  */}


        <div className="paging">
            <ul id="paging_ul" className="paging_ul"></ul>
        </div>

    </div>
    );
};
   
export default BoardshoppingSearch;