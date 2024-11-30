
document.addEventListener('DOMContentLoaded', function () {
    // DB에서 가져온 상품 데이터 (여기서는 예제로 고정값 사용)
    const productName = "에버튼 'BAR SCARF' 스카프 (머플러) - 오피셜";
    const productSeller = 'Official Licensed Product';
    const productPrice = 30000;
    const rewardRate = 0.02;
    const ProductDeliveryFee = 2000;

    // HTML 요소 선택
    const productNameElement = document.getElementById('detail_name');
    const productSellerElement = document.getElementById('detail_seller');
    const productPriceElement = document.getElementById('prdCount_price');
    const rewardPointsElement = document.getElementById('detail_reward_points');
    const deliveryFeeElement = document.getElementById('detail_delivery_fee');

    const selecTitleElement = document.getElementById('select_list_title');
   
    // 선택한 요소에 값 삽입
    productNameElement.textContent = productName;
    productSellerElement.textContent = productSeller;
    productPriceElement.textContent = `${productPrice.toLocaleString()}원`;
    rewardPointsElement.textContent = `${Math.floor(productPrice * rewardRate).toLocaleString()}원 (${rewardRate * 100}%)`;
    deliveryFeeElement.textContent = `${ProductDeliveryFee.toLocaleString()}원`;

    selecTitleElement.textContent = productName;
    
    // --------------------------------옵션 선택시 생성------------------
    
    const optionSelect = document.getElementById('option_select');
    const optionContainer = document.querySelector('.option_inner'); // 옵션 표시할 컨테이너
    const mainContainer = document.querySelector('.front_option_inner'); // 생성된 옵션을 붙일 메인 컨테이너
    const selectedOptions = new Set(); // 이미 선택된 옵션 저장


    optionSelect.addEventListener('change', function () {
        const selectedOption = optionSelect.options[optionSelect.selectedIndex].text;
        
        const priceElement = document.getElementById('seelect_total_price');
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
        const selectRewardPointsElement = newOptionInner.querySelector('#select_total_reward_points'); // 이게 없어서 그랬다 옵션 때문인듯
        const removeButton = newOptionInner.querySelector('.remove_option');

        let totalQuantities = [];

        function updateValues(quantity) {
            totalQuantities.push(quantity);

            const totalPrice = productPrice * quantity;
            const rewardPoints = Math.floor(totalPrice * rewardRate); // 적립금 계산
        
            quantityInput.value = quantity;
            selectTotalPriceElement.textContent = `${totalPrice.toLocaleString()}원`;
            selectRewardPointsElement.textContent = `${rewardPoints.toLocaleString()}원`; // 적립금 업데이트
           
            let sum = totalQuantities.reduce((acc, current) => acc + current, 0);
            console.log(`한개갯수: ${quantity}`);
            console.log(`한개금액: ${totalPrice}`);
            console.log(`총갯수: ${sum}`);
            console.log(`금액: ${totalPrice}`);
             console.log(`적립금: ${rewardPoints}`);
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



 //---------------------------키 입력 방지                    

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
    


// ----------------총 상품 금액 최종 합산-----------------

// document.addEventListener('DOMContentLoaded', function(){

//     const totalPriceTitle = this.getElementById('price_title');
// })


