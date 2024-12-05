import React, { useState } from 'react';
import Pagination from '../Pagination';  // 상대 경로로 import
import { Link } from 'react-router-dom';  // Link 추가

function MainPage() {
    const items = [
        {
          id: 1,
          name: 'HUMMEL 토트넘 1985-87 TRACK JACKET (S~3XL)',
          originalPrice: '',
          salePrice: '139,000원',
          discount: '',
          imageUrl: 'https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/big/202410/3c74955e861f94e99ae72cb3efe0f203.jpg',
          soldOutImage: 'https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/upload/icon_201911181652054700.gif',
          soldOut: true,
        },
        {
          id: 2,
          name: 'ADIDAS 레알마드리드 24/25 LIFE STYLE JERSEY (S~2XL)',
          originalPrice: '',
          salePrice: '159,000원',
          discount: '',
          imageUrl: 'https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202410/32a9a8ac1572e0c2c07a3fb3c921629a.jpg',
          soldOutImage: '',
          soldOut: false,
        },
        {
          id: 3,
          name: 'ADIDAS 맨유 24/25 PRE-MATCH KIT (L~3XL)',
          originalPrice: '109,000원',
          salePrice: '79,000원',
          discount: '28%',
          imageUrl: 'https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202408/f5913de50d2054abf467263dcb3866cc.jpg',
          soldOutImage: '',
          soldOut: false,
        },
        {
          id: 4,
          name: 'GARMAN 브레시아 칼초 00/01 AWAY #10 BAGGIO (M~2XL)',
          originalPrice: '',
          salePrice: '279,000원',
          discount: '',
          imageUrl: 'https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202408/340ede867e423221ef6a16f40eb5b18b.jpg',
          soldOutImage: '',
          soldOut: false,
        },
        {
          id: 5,
          name: 'ADIDAS 아르헨티나 PRE-MATCH KIT (M~3XL)',
          originalPrice: '109,000원',
          salePrice: '79,000원',
          discount: '28%',
          imageUrl: 'https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202407/89a5202fa213b7e74b0f13f3c44d3c11.jpg',
          soldOutImage: '',
          soldOut: false,
        },
        {
          id: 6,
          name: 'ADIDAS 아르헨티나 리버시블 ANTHEM JACKET (L~3XL)',
          originalPrice: '',
          salePrice: '194,000원',
          discount: '',
          imageUrl: 'https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202407/035648b2dc99d62481284f47d759f8fe.jpg',
          soldOutImage: '',
          soldOut: false,
        },
        {
          id: 7,
          name: 'HUMMEL 토트넘 1991 RETRO FA CUP SEMI FINAL KIT',
          originalPrice: '119,000원',
          salePrice: '99,000원',
          discount: '17%',
          imageUrl: 'https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202406/00e004931e85684a96b7c22fcb428f58.jpg',
          soldOutImage: '',
          soldOut: false,
        },
        {
          id: 8,
          name: 'HUMMEL 토트넘 1986 RETRO HOME KIT',
          originalPrice: '119,000원',
          salePrice: '99,000원',
          discount: '17%',
          imageUrl: 'https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202406/a32ac78c19a6e250410a20e36c42f635.jpg',
          soldOutImage: '',
          soldOut: false,
        },
        {
          id: 9,
          name: 'HUMMEL 토트넘 1988 RETRO AWAY KIT',
          originalPrice: '119,000원',
          salePrice: '99,000원',
          discount: '17%',
          imageUrl: 'https://cafe24.poxo.com/ec01/enemy0000/fYw07Q+e08011Z5Qzbz300jECh5aaMmmDMQ7QH7NAQ9NK2EXhqgvmfbzfda0mDNO/Jp2ZgYE1irrrDpzeiP8fA==/_/web/product/small/202406/335ea86b3ac6cc5d52736e7e6b02ca22.jpg',
          soldOutImage: '',
          soldOut: false,
        }
      ];
      

  const itemsPerPage = 8;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 현재 페이지에 해당하는 아이템들만 필터링
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <h1>아이템 목록</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id} className="item">
            <div className="board_img">
              <div className="board_icon">
                {item.soldOut && (
                  <img
                    src={item.soldOutImage}
                    alt="품절"
                    className="sold_out_icon"
                  />
                )}
              </div>
              <Link to="/detailPage">
                <img
                  src={item.imageUrl}
                  alt="product"
                  className="product_img"
                />
              </Link>
            </div>
            <div className="board_content">
              <div className="board_title">
                <a href="#">
                  <strong>{item.name}</strong>
                </a>
              </div>
              <div className="board_price">
                <span>{item.originalPrice}</span>
                <span><strong>{item.salePrice}</strong></span>
                <span><strong>{item.discount}</strong></span>
              </div>
              <div className="board_name">Official Licensed Product</div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination 컴포넌트에 현재 페이지(currentPage)와 페이지 변경 함수(handlePageChange)를 props로 전달 */}
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default MainPage;
