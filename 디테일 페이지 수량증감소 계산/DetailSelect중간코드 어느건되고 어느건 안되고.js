import React, { useState } from "react";
import './DetailSelect.css';

const DetailSelect = () => {
    const [totalQuantity, setTotalQuantity] = useState(0); // 총 수량
    const [totalAmount, setTotalAmount] = useState(0);  // 총 금액
    const [rewardPoints, setRewardPoints] = useState(0); // 총 적립금
    const [items, setItems] = useState([]); // 선택된 아이템들

    const productName = "에버튼 'BAR SCARF' 스카프 (머플러) - 오피셜";
    const rewardRate = 0.01;

    // 총 수량, 금액, 적립금을 업데이트하는 함수
    const updateTotal = (qtyChange = 0, amountChange = 0, rewardChange = 0) => {
        const newTotalQuantity = totalQuantity + qtyChange >= 0 ? totalQuantity + qtyChange : 0;  // 최소 0
        const newTotalAmount = totalAmount + amountChange >= 0 ? totalAmount + amountChange : 0;  // 최소 0
        const newRewardPoints = rewardPoints + rewardChange >= 0 ? rewardPoints + rewardChange : 0; // 최소 0

        setTotalQuantity(newTotalQuantity);
        setTotalAmount(newTotalAmount);
        setRewardPoints(newRewardPoints); // 적립금 업데이트
    };

    // 사이즈 선택 핸들러
    const handleSizeSelect = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const itemName = selectedOption.text;
        const itemPrice = parseInt(selectedOption.getAttribute('data-price'), 10); // 가격을 data-price에서 가져옴
        const itemId = selectedOption.value;

        // 유효하지 않은 옵션 체크
        if (itemId === '*' || itemId === '**' || itemName.includes('[품절]')) {
            alert('유효한 옵션을 선택해주세요.');
            event.target.value = '*'; // 기본값으로 변경
            return;
        }

        // 이미 선택된 옵션인지 확인
        if (items.some(item => item.id === itemId)) {
            alert('이미 선택한 옵션입니다.');
            event.target.value = '*'; // 기본값으로 변경
            return;
        }

        const itemDiv = {
            id: itemId,
            name: itemName,
            price: itemPrice,
            quantity: 1,
            rewardPoints: Math.floor(itemPrice * rewardRate),
        };

        setItems([...items, itemDiv]);
        updateTotal(1, itemPrice, itemDiv.rewardPoints); // 총 수량, 금액, 적립금 업데이트
        event.target.value = '*'; // 기본값으로 설정
    };

    // 수량 업데이트 함수
    const updateItemQuantity = (id, change) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                item.quantity += change;
                if (item.quantity < 1) item.quantity = 1; // 수량이 1 미만이 되지 않도록 처리
            }
            return item;
        });
        setItems(updatedItems);

        // 변경된 항목에 대해 총합 업데이트
        const item = updatedItems.find(item => item.id === id);
        updateTotal(change, item.price * change, item.rewardPoints * change); // 적립금도 함께 업데이트
    };

    // 항목 삭제 함수
    const removeItem = (id) => {
        // 삭제할 항목을 먼저 찾고
        const removedItem = items.find(item => item.id === id);

        // 항목을 필터링하여 제거
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);

        // 삭제된 항목의 수량과 가격을 반영하여 총합을 업데이트
        if (removedItem) {
            updateTotal(-removedItem.quantity, -removedItem.price * removedItem.quantity, -removedItem.rewardPoints * removedItem.quantity);
        }
    };

    return (
        <>
            <div className="SizeSelection_inner">
                <div className="SizeSelection_option">
                    <div className="SizeSelection_title">
                        <span style={{ fontSize: '15px' }}>사이즈 (한국)</span>
                    </div>
                    <div className="SizeSelection_size">
                        <select id="itemSelector" className="SizeSelection_select" style={{ fontSize: '15px' }} onChange={handleSizeSelect}>
                            <option value="*" defaultValue>- [필수] 옵션을 선택해 주세요 -</option>
                            <option value="**" disabled>-------------------</option>
                            <option value="item1" data-price="50000">S (95)</option>
                            <option value="item2" data-price="50000">M (100)</option>
                            <option value="item3" data-price="50000">L (105)</option>
                            <option value="item4" data-price="50000">XL (110)</option>
                            <option value="item5" data-price="50000">XXL (115) [품절]</option>
                        </select>
                    </div>
                </div>
            </div>

            {items.length > 0 && (
                <div className="DetailSelect_Selected_option">
                    {items.map(item => (
                        <div key={item.id} className="DetailSelect_list">
                            <div className="DetailSelect_NewOption">
                                <div className="DetailSelect_name">
                                    <div className="DetailSelect_title">{productName}</div>
                                    <div className="DetailSelect_size">{item.name}</div>
                                </div>
                                <div className="DetailSelect_list_quantity">
                                    <button className="DetailSelect_decreaseBtn" onClick={() => updateItemQuantity(item.id, -1)}>▼</button>
                                    <input type="number" className="quantityInput" value={item.quantity} min="1" disabled />
                                    <button className="DetailSelect_increaseBtn" onClick={() => updateItemQuantity(item.id, 1)}>▲</button>
                                    <button className="DetailSelect_remove" onClick={() => removeItem(item.id)}>x</button>
                                </div>

                                <div className="DetailSelect_total_count">
                                    <div className="DetailSelect_total_price">{(item.quantity * item.price).toLocaleString()} 원</div>
                                    <div className="DetailSelect_total_rewardRate">적립금 ({item.rewardPoints} 원)</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="BuyInformation"></div>

            <div className="DetailSelecte_total_price">
                <span className="DetailSelecte_price_title">총 수량</span>
                <span className="DetailSelecte_price_total" id="totalQuantity">{totalQuantity}개</span>
            </div>

            <div className="DetailSelecte_total_price">
                <span className="DetailSelecte_price_title"><strong>총 상품금액</strong></span>
                <span className="DetailSelecte_price_total"><strong id="totalAmount">{totalAmount.toLocaleString()} 원</strong></span>
            </div>

            <div className="DetailSelecte_total_price">
                <span className="DetailSelecte_price_title"><strong>적립금</strong></span>
                <span className="DetailSelecte_price_total"><strong id="rewardPoints">{rewardPoints} 원</strong></span>
            </div>

            <button className="BuyInformation_buyBtn"><a href="#">바로구매</a></button>
        </>
    );
};

export default DetailSelect;
