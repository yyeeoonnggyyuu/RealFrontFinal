import React, { useState, useEffect } from "react";

export default function Pagination({ totalPages, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (onPageChange) onPageChange(currentPage); // 페이지 변경 시 부모 컴포넌트에 알림
  }, [currentPage, onPageChange]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return; // 유효한 페이지 범위 체크
    setCurrentPage(page);
  };

  const createPageButton = (label, page, disabled) => {
    return (
      <li
        key={page}
        className={disabled ? "disabled" : ""}
        onClick={() => goToPage(page)}
      >
        {label}
      </li>
    );
  };

  return (
    <ul className="pagination">
      {createPageButton("<<", 1, currentPage === 1)}
      {createPageButton("<", currentPage - 1, currentPage === 1)}

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return createPageButton(page, page, currentPage === page);
      })}

      {createPageButton(">", currentPage + 1, currentPage === totalPages)}
      {createPageButton(">>", totalPages, currentPage === totalPages)}
    </ul>
  );
}


<div className="paging">
<Pagination totalPages={2} onPageChange={handlePageChange} />
</div>