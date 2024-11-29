// ------------사이즈 선택 옵션 
// document.addEventListener('DOMContentLoaded', function () {
//     const optionSelect = document.getElementById('option_select');
//     const sizeSelectDisplay = document.getElementById('size_select'); // 올바른 id 참조

//     optionSelect.addEventListener('change', function () {
//         const selectedOption = optionSelect.options[optionSelect.selectedIndex].text;
//         sizeSelectDisplay.textContent =
//             selectedOption !== '- [필수] 옵션을 선택해 주세요 -'
//                 ? selectedOption
//                 : '선택된 사이즈 없음';
//     });
// });

// ----상세페이지 script----------

    document.addEventListener('DOMContentLoaded', /*async*/ function () {
        // try {
        //     // 서버에서 데이터 가져오기 (API 엔드포인트 예: /api/product)
        //     const response = await fetch('/api/product');
        //     if (!response.ok) {
        //         throw new Error(`서버 응답 오류: ${response.status}`);
        //     }

        //     // JSON 데이터 파싱
        //     const data = await response.json();

        //     // 데이터에서 필요한 정보 추출
        //     const {
        //         productName,
        //         productSeller,
        //         productPrice,
        //         rewardRate,
        //         ProductDeliveryFee
        //     } = data;

        // DB에서 가져온 상품 데이터 (여기서는 예제로 고정값 사용)
        const productName = "에버튼 'BAR SCARF' 스카프 (머플러) - 오피셜";
        const productSeller = 'Official Licensed Product';
        const productPrice = 60000;
        const rewardRate = 0.01;
        const ProductDeliveryFee = 3000;

        // 적립금 계산
        const rewardPoints = Math.floor(productPrice * rewardRate);

        // HTML 요소 선택  
        const productNameElement = document.getElementById('detail_name');
        const productSellerElement = document.getElementById('detail_seller');
        const productPriceElement = document.getElementById('prdCount_price');
        const rewardPointsElement = document.getElementById('detail_reward_points');
        const deliveryFeeElement = document.getElementById('detail_delivery_fee');

        //up down div 요소 선택
        const selecTitleElement = document.getElementById('select_list_title');
        const quantityInput = document.getElementById('select_list_quantity');
        const quantityUp = document.getElementById('quantity_up');
        const quantityDown = document.getElementById('quantity_down');
        const selectTotalPriceElement = document.getElementById('select_total_price');
        const selectRewardPointsElement = document.getElementById('select_total_reward_points');
        // 결제 금액과 수량 표시할 곳
        const payPrice = document.getElementById('pay_price');
        const payQuantity = document.getElementById('pay_quantity');



        // 선택한 요소에 값 삽입
        productNameElement.textContent = productName;
        productSellerElement.textContent = productSeller;
        productPriceElement.textContent = `${productPrice.toLocaleString()}원`;
        rewardPointsElement.textContent = `${rewardPoints.toLocaleString()}원 (${rewardRate * 100}%)`;
        deliveryFeeElement.textContent = `${ProductDeliveryFee.toLocaleString()}원`;

        selecTitleElement.textContent = productName;

        
        // 수량 증가 버튼 이벤트
        quantityUp.addEventListener('click', function (e) {
            e.preventDefault();
            let currentValue = parseInt(quantityInput.value) || 1;
            currentValue++;
            
            updateValues(currentValue);
        });

        // 수량 감소 버튼 이벤트
        quantityDown.addEventListener('click', function (e) {
            e.preventDefault();
            let currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue > 1) {
                currentValue--;
                updateValues(currentValue);
            }
        });

        // 값 업데이트 함수
        function updateValues(quantity) {
            // 총 금액 및 적립금 계산
            const totalPrice = productPrice * quantity;
            const rewardPoints = Math.floor(totalPrice * rewardRate);
            
            // 입력 필드 및 DOM 업데이트
            quantityInput.value = quantity;
            selectTotalPriceElement.textContent = `${totalPrice.toLocaleString()}원`;
            selectRewardPointsElement.textContent = `${rewardPoints.toLocaleString()}원`;
           
    
            // 결제 금액과 수량 업데이트

            
            payPrice.textContent = `${totalPrice.toLocaleString()}원`;
            payQuantity.textContent = `(${quantity}개)`;
        

            // 상세페이지 가격 업데이트
            selectTotalPriceElement.textContent = `${totalPrice.toLocaleString()}원`;  

        }

        // 초기 값 업데이트
        updateValues(parseInt(quantityInput.value) || 1);

    });
    // catch (error) {
    //     console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
    // }

    //키 입력 방지                    

    document.getElementById('select_list_quantity').addEventListener('keydown', function (e) {
        e.preventDefault();
    })


// -------스크롤 내릴 때 버튼 보이기

document.addEventListener('DOMContentLoaded', function(){
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
    

document.addEventListener('DOMContentLoaded', function () {
    const optionSelect = document.getElementById('option_select');
    const optionContainer = document.querySelector('.option_inner'); // 옵션 표시할 컨테이너
    const mainContainer = document.querySelector('.front_option_inner'); // 생성된 옵션을 붙일 메인 컨테이너
    

    const selectedOptions = new Set(); // 이미 선택된 옵션 저장

    optionSelect.addEventListener('change', function () {
        const selectedOption = optionSelect.options[optionSelect.selectedIndex].text;

        if (selectedOption === '- [필수] 옵션을 선택해 주세요 -' || selectedOption.includes('품절')) {
            alert('유효한 옵션을 선택해주세요.');
            return;
        }

        if (selectedOptions.has(selectedOption)) {
            alert('이미 선택한 옵션입니다.');
            return;
        }

        selectedOptions.add(selectedOption);

        // 기존 옵션_inner 복사 및 업데이트
        const newOptionInner = optionContainer.cloneNode(true);
        newOptionInner.style.display = 'block'; // 보이도록 설정
        newOptionInner.querySelector('.size_select').textContent = selectedOption; // 옵션명 업데이트
        newOptionInner.querySelector('#select_list_quantity').value = 1; // 수량 초기화
        newOptionInner.querySelector('#select_total_price').textContent = '0원'; // 총 가격 초기화

        // 수량 및 가격 업데이트 로직 추가
        const quantityInput = newOptionInner.querySelector('#select_list_quantity');
        const quantityUp = newOptionInner.querySelector('#quantity_up');
        const quantityDown = newOptionInner.querySelector('#quantity_down');
        const selectTotalPriceElement = newOptionInner.querySelector('#select_total_price');
        const removeButton = newOptionInner.querySelector('.remove_option');

        const productPrice = 60000; // 가격 예제값
        const rewardRate = 0.01;

        function updateValues(quantity) {
            const totalPrice = productPrice * quantity;
            const rewardPoints = Math.floor(totalPrice * rewardRate);

            quantityInput.value = quantity;
            selectTotalPriceElement.textContent = `${totalPrice.toLocaleString()}원`;
        }

        quantityUp.addEventListener('click', function (e) {
            e.preventDefault();
            let currentValue = parseInt(quantityInput.value) || 1;
            currentValue++;
            updateValues(currentValue);
        });

        quantityDown.addEventListener('click', function (e) {
            e.preventDefault();
            let currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue > 1) {
                currentValue--;
                updateValues(currentValue);
            }
        });

        // 옵션 삭제
        removeButton.addEventListener('click', function(){
            selectedOptions.delete(selectedOption);
            newOptionInner.remove();
        })

        // 초기 업데이트
        updateValues(1);

        // 생성된 옵션 추가
        mainContainer.appendChild(newOptionInner);

    });
});

// ----------------총 상품 금액 최종 합산-----------------

// document.addEventListener('DOMContentLoaded', function(){

//     const totalPriceTitle = this.getElementById('price_title');
// })


