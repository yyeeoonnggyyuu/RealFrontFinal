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
    