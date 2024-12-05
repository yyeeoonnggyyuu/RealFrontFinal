import React, { useState } from 'react';
import Pagination from '../Pagination';  // 상대 경로로 import
import './BoardshoppingLi.css'

function MainPage() {
  const items = [
    '아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5', '아이템 6', '아이템 7', '아이템 8',
    '아이템 9', '아이템 10', '아이템 11', '아이템 12', '아이템 13', '아이템 14', '아이템 15', '아이템 16',
    '아이템 17', '아이템 18', '아이템 19', '아이템 20', '아이템 21', '아이템 22', '아이템 23', '아이템 24',
    '아이템 25'

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
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Pagination 컴포넌트에 현재 페이지(currentPage)와 페이지 변경 함수(handlePageChange)를 props로 전달 */}
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default MainPage;
