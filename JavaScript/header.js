document.addEventListener("DOMContentLoaded", function () {
  // 모든 haschild 요소를 선택
  const categoryItems = document.querySelectorAll(".hasChild");
  categoryItems.forEach((item) => {
    // 클릭 이벤트 추가
    item.addEventListener("click", function (event) {
      event.preventDefault(); // 링크 이동 방지

      // 모든 submenu를 숨김
      const allSubmenus = document.querySelectorAll(".submenu");
      allSubmenus.forEach((submenu) => {
        submenu.style.opacity = "0";
        submenu.style.visibility = "hidden";
      });

      // 현재 클릭된 항목의 submenu 표시/숨김 토글
      const submenu = this.querySelector(".submenu");
      if (submenu.style.visibility === "visible") {
        submenu.style.opacity = "0";
        submenu.style.visibility = "hidden";
      } else {
        submenu.style.opacity = "1";
        submenu.style.visibility = "visible";
      }
    });
  });

  // 페이지의 다른 곳을 클릭하면 메뉴 닫기
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".hasChild")) {
      const allSubmenus = document.querySelectorAll(".submenu");
      allSubmenus.forEach((submenu) => {
        submenu.style.opacity = "0";
        submenu.style.visibility = "hidden";
      });
    }
  });
});