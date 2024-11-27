// input에 있는 value값들 클릭시 삭제 기능

document.addEventListener("DOMContentLoaded", function() {
    const cursorSelect = document.querySelectorAll('input[type="text"], textarea');
        
    cursorSelect.forEach(input => {
        input.addEventListener('click', function() {
            if (this.value === '제목을 입력해주세요' || this.value === '내용을 입력해주세요'
                ||  this.value === '@아이디' ||  this.value === '@상품' ||  this.value === '@키워드'
            ) {
                this.value = '';  // 기본값이 있으면 지움
            }
        });
    });
});

