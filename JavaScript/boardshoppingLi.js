// -------------- navi바 밑에 선택시 해당 구단 유니폼만 보이게하기 
// 수정필요 클릭은 짙게 되나 다른거 선택시 안지워짐
document.querySelectorAll('.select_club_ul li a').forEach(function (li) {

    li.addEventListener('click', function (event) {
        document.querySelectorAll('select_club_ul a').forEach(function (li) {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     const menuItems = document.querySelectorAll(".select_club_ul li a");
//     const currentPath = window.location.pathname;

//     menuItems.forEach(function(link) {
//         const li = link.parentElement;

//         if (link.getAttribute('href') === currentPath) {
//             li.classList.add("active");s
//         }
//     });
// });


// ----------------------- 페이징 처리 
// 추후에 수정 필요

document.addEventListener("DOMContentLoaded", () => {
    const paginationElement = document.getElementById("paging_ul");
    const totalPages = 2; // 총 페이지 수
    let currentPage = 1;  // 현재 페이지

    function renderPagination() {
        paginationElement.innerHTML = "";

        // << 버튼
        const firstPage = document.createElement("li");
        firstPage.innerHTML = `<a href="#" class="${currentPage === 1 ? 'disabled' : ''}"><<</a>`;
        firstPage.addEventListener("click", () => goToPage(1));
        paginationElement.appendChild(firstPage);

        // < 버튼
        const prevPage = document.createElement("li");
        prevPage.innerHTML = `<a href="#" class="${currentPage === 1 ? 'disabled' : ''}"><</a>`;
        prevPage.addEventListener("click", () => goToPage(currentPage - 1));
        paginationElement.appendChild(prevPage);

        // 페이지 번호
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement("li");
            pageItem.innerHTML = `<a href="#" class="${currentPage === i ? 'active' : ''}">${i}</a>`;
            pageItem.addEventListener("click", () => goToPage(i));
            paginationElement.appendChild(pageItem);
        }

        // > 버튼
        const nextPage = document.createElement("li");
        nextPage.innerHTML = `<a href="#" class="${currentPage === totalPages ? 'disabled' : ''}">></a>`;
        nextPage.addEventListener("click", () => goToPage(currentPage + 1));
        paginationElement.appendChild(nextPage);

        // >> 버튼
        const lastPage = document.createElement("li");
        lastPage.innerHTML = `<a href="#" class="${currentPage === totalPages ? 'disabled' : ''}">>></a>`;
        lastPage.addEventListener("click", () => goToPage(totalPages));
        paginationElement.appendChild(lastPage);
    }

    function goToPage(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        loadPageData(currentPage);
        renderPagination();
    }

    function loadPageData(page) {
        console.log(`Page ${page} data loaded.`);
        // 실제 데이터 요청 및 갱신 로직 추가
    }

    renderPagination();
});





// ----------------sold_out 이미지 처리_-------------

   
        // let isSoldOut = true;

        // const productImage = document.querySelector('.product_img');
        // const soldOutIcon = document.querySelector('.sold_out_icon');

        // if (isSoldOut) {
        //     soldOutIcon.style.display = 'block';

        //     productImage.classList.add('sold_out_img');
        // } else {
        //     soldOutIcon.style.display = 'none';

        //     productImage.classList.remove('sold_out_img');
        // }
// -------------------------------------

document.addEventListener('DOMContentLoaded',function(){
          // 제품 항목 전체를 선택
          const productItems = document.querySelectorAll('.item');

          productItems.forEach(item => {
              // 각 항목에서 필요한 요소 선택
              const productImage = item.querySelector('.product_img');
              const soldOutIcon = item.querySelector('.sold_out_icon');
          
              // 재고 상태 확인 (예제: 조건으로 isSoldOut 사용)
              // 실제로는 서버에서 데이터를 가져오거나, HTML 속성에서 재고 여부를 확인해야 함
              const isSoldOut = soldOutIcon.alt === '품절'; // 예: 품절 상태를 alt 속성으로 판단
          
              if (isSoldOut) {
                  // 'Sold Out' 아이콘 표시
                  soldOutIcon.style.display = 'block';
          
                  // 제품 이미지 흐리게 처리
                  productImage.classList.add('sold_out_img');
              } else {
                  // 재고가 있으면 'Sold Out' 아이콘 숨기기
                  soldOutIcon.style.display = 'none';
          
                  // 제품 이미지 흐리게 처리 해제
                  productImage.classList.remove('sold_out_img');
              }
          });
          
});
  