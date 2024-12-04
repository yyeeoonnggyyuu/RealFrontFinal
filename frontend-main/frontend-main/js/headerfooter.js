// <!-- 동적로딩 -->
document.addEventListener("DOMContentLoaded", function () {
  // HTML을 동적으로 로드하는 함수
  function loadHTML(url, elementId) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const element = document.getElementById(elementId);
        element.innerHTML = data;

        // 동적으로 삽입된 HTML 내부의 <script> 태그 실행
        const scripts = element.querySelectorAll("script");
        scripts.forEach(script => {
          const newScript = document.createElement("script");

          // src 속성이 있으면 외부 스크립트 로드
          if (script.src) {
            newScript.src = script.src;
          } else {
            // 내부 스크립트 실행
            newScript.textContent = script.textContent;
          }

          document.body.appendChild(newScript);  // 새로운 <script> 태그를 body에 추가
        });
      })
      .catch(error => console.error('Error loading the HTML:', error));
  }

  // header.html과 footer.html을 동적으로 로드
  loadHTML('header.html', 'header-placeholder');
  loadHTML('footer.html', 'footer-placeholder');
});