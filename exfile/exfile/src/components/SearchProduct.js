import React from "react";
import "../css/SearchProduct.css";
import TotalSearchHead from "./TotalSearchHead";

const SearchProduct = () => {
    return (
        <>

            <TotalSearchHead />
                    {/* --------------------------------각각의 본문-------------------- */}
            <section className="container">
                <div className="board_list_wrap">
                    <div className="board_list">
                        {/* ------------------아이템 카드------------------ */}
                        <ul className="board_list_body">


                            <li className="item">
                                <div className="board_img">
                                    <div className="board_icon">
                                        <img
                                            src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/upload/icon_201911181652054700.gif"
                                            alt="품절"
                                            className="sold_out_icon"
                                        />
                                    </div>
                                    <img
                                        src="https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202404/bc522b3fb66d399ce0d019ccf0e7feef.jpg"
                                        alt="product"
                                        className="product_img"
                                    />
                                </div>
                                <div className="board_content">
                                    <div className="board_title">
                                        <a href="#">
                                            <strong>아르헨티나 1994 RETRO AWAY #10 (XS~2XL)</strong>
                                        </a>
                                    </div>
                                    <div className="board_price">
                                        <span>209,000원</span>
                                        <span>
                                            <strong>99,000원</strong>
                                        </span>
                                        <span>
                                            <strong>53%</strong>
                                        </span>
                                    </div>
                                    <div className="board_name">Official Licensed Product</div>
                                </div>
                            </li>

                            

                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SearchProduct;
