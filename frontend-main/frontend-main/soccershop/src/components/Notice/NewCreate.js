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


document.addEventListener('DOMContentLoaded', function() {
    const filePlusButton = document.querySelector('.file_plus_button');
    const formFilePlus = document.querySelector('.form_file_plus');

    // 파일 첨부 항목을 동적으로 추가하는 기능
    filePlusButton.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 동작 방지
        const currentItems = formFilePlus.querySelectorAll('.item').length; // 현재 항목 개수
        if (currentItems < 4) { // 파일 첨부 항목이 5개 미만일 경우에만 추가
            const newItemDiv = document.createElement('div');
            newItemDiv.classList.add('item');
            newItemDiv.innerHTML = `
                 <table>
                    <th class="table_head">
                        <label for="file-input">파일 선택</label><br>
                    </th>
                    <td class="table_body">
                        <label class="select_title" for="file-input">파일 선택</label><br>
                        <input type="file" id="file-input" class="file-input" name="files[]"/>
                        <div class="file-name">선택된 파일 없음</div>
                        <button class="file_minus_button" type="button">-</button>
                    </td>
                 </table>
            `;

            // 삭제 버튼 이벤트 추가
            newItemDiv.querySelector('.file_minus_button').addEventListener('click', function() {
                newItemDiv.remove(); // 해당 항목 삭제
                reassignFileLabels(); // 파일 번호 재조정
            });

            formFilePlus.appendChild(newItemDiv); // 새 항목 추가
        } else {
            alert("파일 첨부는 최대 5개까지 가능합니다.");
        }
    });

});



  