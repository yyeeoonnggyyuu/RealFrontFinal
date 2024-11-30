document.addEventListener('DOMContentLoaded', function () {

    let totalQuantity = 0;
    let totalAmount = 0;

    //상품 셀렉트 박스에서 선택 변경 시 
    document.getElementById('itemSelector').addEventListener('change', (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const itemName = selectedOption.text;
        const itemPrice = parseInt(selectedOption.getAttribute('data-price'));

        //이미 선택된 아이템이 있다면 더 이상 추가하지 않음
        if (document.querySelector(`#${selectedOption.value}`)) return;

        //새로운 div 생성
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.id = selectedOption.value; //아이템 ID를 고유하게 설정

        //테이블 구조 생성
        itemDiv.innerHTML = `
       <table class="detail_text_select_list">
        <tr>
            <td class="select_list_title">
                <p class="select_list_title">상품명</p>
                <span class="size_select">select_size</span>
            </td>
            <td class="select_list_quantity">
                <span> 
                    <button class="quantity_down">-</button>
                    <input type="number" class="quantityInput" value="1" min="1" />
                    <button class="quantity_up">+</button>
                    <button class="remove_option">x</button>
                </span>
            </td>
            <td class="select_total_count">
                <span class="select_total_price">${itemPrice}</span><span>원</span><br>
                <span style="font-size: 12px;">적립금(<span class="select_total_reward_points">0원</span>)</span>
            </td>
        </tr>
    </table>
     `;

        // 갯수  조정 + 버튼 이벤트
        itemDiv.querySelector('#quantity_up').addEventListener('click', () => {
            const quantityInput = itemDiv.querySelector('#select_total_price');
            const amountSpan = itemDiv.querySelector('#select_total_price');
            let quantity = parseInt(quantityInput.value);
            quantityInput.value = ++quantity;

            //금액 업데이트
            const totalAmountForItem = quantity * itemPrice;
            amountSpan.textContent = totalAmountForItem;

            //총합 업데이트
            updateTotal(1, itemPrice); // 갯수 변경과 금액 업데이트
        });

        //갯수 조정 - 버튼 이벤트
        itemDiv.querySelector('#quantity_down').addEventListener('click', () => {
            const quantityInput = itemDiv.querySelector('#select_total_price');
            const amountSpan = itemDiv.querySelector('#select_total_price');
            let quantity = parseInt(quantityInput.value);

            if (quantity > 1) {
                quantityInput.value = --quantity;

                //금액 업데이트
                const totalAmountForItem = quantity * itemPrice;
                amountSpan.textContent = totalAmountForItem;

                //총합 업데이트
                updateTotal(-1, - itemPrice);// 갯수 감소와 금액 감소
            };
        });
        // 총합 업데이트 함수
        function updateTotal(qtyChange, amountChange) {
            totalQuantity += qtyChange;
            totalAmount += amountChange;
            document.getElementById('totalQuantity').textContent = totalQuantity;
            document.getElementById('totalAmount').textContent = totalAmount;
        }

        // 아이템 컨테이너에 추가
        document.getElementById('itemsContainer').appendChild(itemDiv);

        // 초기 값으로 총합 업데이트
        updateTotal(1, itemPrice);
    });
});






//---------------------------키 입력 방지                    

document.getElementById('select_list_quantity').addEventListener('keydown', function (e) {
    e.preventDefault();
})


// -------스크롤 내릴 때 버튼 보이기

document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("scrollToTopBtn").style.display = "block";  // 스크롤을 내리면 버튼 보이기
        } else {
            document.getElementById("scrollToTopBtn").style.display = "none";  // 맨 위로 가면 버튼 숨기기
        }
    };

    // 버튼 클릭 시 페이지 맨 위로 스크롤
    document.getElementById("scrollToTopBtn").onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"  // 부드럽게 스크롤
        });
    };
})



// ----------------총 상품 금액 최종 합산-----------------

// document.addEventListener('DOMContentLoaded', function(){

//     const totalPriceTitle = this.getElementById('price_title');
// })


