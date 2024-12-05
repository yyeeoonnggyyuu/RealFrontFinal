import React from 'react';
import './Pagination.css';

function Pagination({ totalPages, currentPage, onPageChange }) {
  const handleClick = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);  // 페이지 번호 변경을 부모 컴포넌트로 알림
  };

  return (
    <ul id="Pagination_paging_ul">
      <li className='Pagination_paging_li'>
        <a href="#" onClick={() => handleClick(1)} className="Pagination_paging_a">
          &lt;&lt;
        </a>
      </li>
      <li className='Pagination_paging_li'>
        <a href="#" onClick={() => handleClick(currentPage - 1)} className="Pagination_paging_a">
          &lt;
        </a>
      </li> 
      {[...Array(totalPages).keys()].map((_, index) => (
        <li key={index}  className='Pagination_paging_li'>
          <a
            href="#"
            onClick={() => handleClick(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </a>
        </li>
      ))}
      <li className='Pagination_paging_li'>
        <a href="#" onClick={() => handleClick(currentPage + 1)} className="Pagination_paging_a">
          &gt;
        </a>
      </li>
      <li className='Pagination_paging_li'>
        <a href="#" onClick={() => handleClick(totalPages)} className="Pagination_paging_a">
          &gt;&gt;
        </a>
      </li>
    </ul>
  );
}

export default Pagination;