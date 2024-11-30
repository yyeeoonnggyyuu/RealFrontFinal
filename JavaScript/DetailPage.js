document.addEventListener('DOMContentLoaded', function () {
    let totalQuantity = 0;
    let totalAmount = 0;
    
    const productPrice = 50000;
    const rewardRate = 0.01;

    const point = Math.floor(productPrice * rewardRate);

    const updateTotal = (qtyChange, amountChange) => {
        totalQuantity += qtyChange;
        totalAmount += amountChange;

        const rewardPoints = Math.floor(totalAmount * rewardRate);

        document.getElementById('totalQuantity').textContent = totalQuantity;
        document.getElementById('totalAmount').textContent = totalAmount.toLocaleString();

        console.log(`총 수량: ${totalQuantity}, 총 금액: ${totalAmount}, 적립금: ${rewardPoints}`);
    };

    document.getElementById('itemSelector').addEventListener('change', (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const itemName = selectedOption.text;
        const itemPrice = parseInt(selectedOption.getAttribute('data-price'), 10);
        const itemId = selectedOption.value;

        // 유효하지 않은 옵션 체크
        if (itemId === '*' || itemId === '**' || itemName.includes('[품절]')) {
            alert('유효한 옵션을 선택해주세요.');
            event.target.value = '*'; // 다시 기본값으로 변경
            return;
        }

        // 이미 선택된 옵션인지 확인
        if (document.getElementById(itemId)) {
            alert('이미 선택한 옵션입니다.');
            event.target.value = '*'; // 다시 기본값으로 변경
            return;
        }

        const productName = "에버튼 'BAR SCARF' 스카프 (머플러) - 오피셜";

        // const point = Math.floor(itemPrice * rewardRate).toLocaleString();


        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.id = itemId;

        itemDiv.innerHTML = `

        <style>
        .detail_text_select_list {
            height: 100px;
            width: 610px;
            font-size: 10px;
        }
           
        .detail_text_select_list .select_list_title {
             width: 55%;
            padding: 20 10 20 0;
            font-size: 14px;
            
        }
        .select_list_title p {
            width: 250px !important;
              font-size: 15px !important;
        }
        .size_select {
          font-size: 15px !important;
        }

        .detail_text_select_list .select_list_quantity {
          width: 250px;
            padding: 20 0;
            
        }

.select_list_quantity {

    margin: 0 auto;
    padding: 0;   

}

.select_list_quantity input {
    width: 40px;
    height: 25px;
    margin-right: 5px;
    border-radius: 4px;
}

.increaseBtn,
.decreaseBtn {
    width: 20px;
    height: 25px;
    display: inline-block;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    font-size: 15px;

    background-color: inherit;
    border: none;
    text-decoration: none;
    color: initial;
}
.increaseBtn{
   margin-right: 20px;
}
.increaseBtn:hover,
.decreaseBtn:hover {
    background-color: none;
    font-size: 1.5em;
}

.remove_option{
    text-align: right;
    width: 20px;
    height: 20px;
    font-size: 14px;
    background-color: inherit;
    border: none;
    color: #B5B6B5;
}
.remove_option:hover{
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    cursor: pointer;

    width: 20px;
    height: 30px;

}


.detail_text_select_list .select_total_count {

    width: 20%;
    padding: 20 0;
    font-size: 14px;
    text-align: right;
    gap: 0;
}

        </style>
            <table class="detail_text_select_list">
                <tr>
                    <td class="select_list_title">
                        <p class="select_list_title">${productName}</p>
                        <span class="size_select">${itemName}</span>
                    </td>
                    <td class="select_list_quantity">
                        <span>
                            <button class="decreaseBtn">▼</button>
                            <input type="number" class="quantityInput" value="1" min="1" disabled />
                            <button class="increaseBtn">▲</button>
                            <button class="remove_option">x</button>
                        </span>
                    </td>
                    <td class="select_total_count">
                        <span class="select_total_price">${itemPrice}</span><span>원</span><br>
                        <span style="font-size: 12px;">적립금(<span class="select_total_reward_points">${point}</span>)</span>
                    </td>
                </tr>
            </table>
        `;

        event.target.value = '*'; // 다시 기본값으로 변경
        const rewardPointsSpan = itemDiv.querySelector('.select_total_reward_points');
        const quantityInput = itemDiv.querySelector('.quantityInput');
        const amountSpan = itemDiv.querySelector('.select_total_price');
        
        let quantity = parseInt(quantityInput.value, 10);

        // 수량 증가 버튼 이벤트
        itemDiv.querySelector('.increaseBtn').addEventListener('click', () => {
            
            quantityInput.value = ++quantity;

            // 금액 업데이트
            const totalAmountForItem = quantity * itemPrice;
            amountSpan.textContent = totalAmountForItem;

            //적립금 계산 및 업데이트
            const rewardPoints = Math.floor(totalAmountForItem * rewardRate);
            rewardPointsSpan.textContent = rewardPoints;

            // 총합 업데이트
            updateTotal(1, itemPrice);
        });

        // 수량 감소 버튼 이벤트
        itemDiv.querySelector('.decreaseBtn').addEventListener('click', () => {
            

            if (quantity > 1) {
                quantityInput.value = --quantity;

                const totalAmountForItem = quantity * itemPrice;
                amountSpan.textContent = totalAmountForItem;


                const rewardPoints = Math.floor(totalAmountForItem * rewardRate);
                rewardPointsSpan.textContent = rewardPoints;

                updateTotal(-1, -itemPrice);
            }
        });

        // 상품 제거 버튼 이벤트
        itemDiv.querySelector('.remove_option').addEventListener('click', () => {
            const quantity = parseInt(itemDiv.querySelector('.quantityInput').value, 10);
            const totalAmountForItem = quantity * itemPrice;

            updateTotal(-quantity, -totalAmountForItem);

            itemDiv.remove();

            //아이템 삭제 후 itemID 중복 체크를 다시 할수 있도록 한다
            document.getElementById(itemId);
        });

        document.querySelector('.itemsContainer').appendChild(itemDiv);
        updateTotal(1, itemPrice);
    });

    // 수량 입력 필드 키보드 입력 방지
    document.addEventListener('keydown', function (event) {
        if (event.target.classList.contains('quantityInput')) {
            event.preventDefault();
        }
    });
});