
document.addEventListener('DOMContentLoaded',function(){

    
        // -------------------------------------------------------
        const productName = "에버튼 'BAR SCARF' 스카프 (머플러) - 오피셜";
        const productSeller = 'Official Licensed Product';
        const productPrice = 50000;
        const rewardRate = 0.01;
        const ProductDeliveryFee = 4000;

        // HTML 요소 선택
        const productNameElement = document.getElementById('detail_name');
        const productSellerElement = document.getElementById('detail_seller');
        const productPriceElement = document.getElementById('prdCount_price');
        const rewardPointsElement = document.getElementById('detail_reward_points');
        const deliveryFeeElement = document.getElementById('detail_delivery_fee');

    


        // 선택한 요소에 값 삽입
        productNameElement.textContent = productName;
        productSellerElement.textContent = productSeller;
        productPriceElement.textContent = `${productPrice.toLocaleString()}원`;
        rewardPointsElement.textContent = `${Math.floor(productPrice * rewardRate).toLocaleString()}원 (${rewardRate * 100}%)`;
        deliveryFeeElement.textContent = `${ProductDeliveryFee.toLocaleString()}원`;


        //  -----------------------------------------------------------
})

import React from "react";

const ItemData = () => {
        const items = [
                {
                        id:1,
                        productName = "에버튼 'BAR SCARF' 스카프 (머플러) - 오피셜",
                        productSeller = 'Official Licensed Product',
                        productPrice = '50000',
                        rewardRate = '0.01',
                        ProductDeliveryFee = '4000'
                }]
        return (
                

                
        );
};

export default ItemData;