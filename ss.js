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

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.id = itemId;

        itemDiv.innerHTML = `

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