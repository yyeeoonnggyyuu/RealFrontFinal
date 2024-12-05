import React from "react";
import './DetailSelect.css';

const DetailSelect = () => {
    return (
        <>
            <div className="SizeSelection_inner">
                <div className="SizeSelection_option">
                    <div className="SizeSelection_title">
                        <span style={{ fontSize: '15px' }}>사이즈 (한국)</span>
                    </div>
                    <div className="SizeSelection_size">
                        <select id="itemSelector" className="SizeSelection_select" style={{ fontSize: '15px' }}>
                            <option value="*" selected="">- [필수] 옵션을 선택해 주세요 -</option>
                            <option value="**" disabled="">-------------------</option>
                            <option value="item1" data-price="50000">S (95)</option>
                            <option value="item2" data-price="50000">M (100)</option>
                            <option value="item3" data-price="50000">L (105)</option>
                            <option value="item4" data-price="50000">XL (110)</option>
                            <option value="item5" data-price="50000">XXL (115) [품절]</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className="BuyInformation"></div>

            <div className="DetailSelecte_total_price">
                <span className="DetailSelecte_price_title">총 수량</span>
                <span className="DetailSelecte_price_total" id="totalQuantity">0<span>개</span></span>
            </div>
            <div className="DetailSelecte_total_price">
                <span className="DetailSelecte_price_title"><strong id="">총 상품금액</strong></span>
                <span className="DetailSelecte_price_total"><strong id="totalAmount">0</strong></span>
            </div>

            <button className="BuyInformation_buyBtn"><a href="#">바로구매</a></button>

        
        </>
    );
};

export default DetailSelect;
