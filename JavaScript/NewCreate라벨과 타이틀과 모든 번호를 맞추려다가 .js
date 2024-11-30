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

// 제목 그대로 모든 라벨번호 파일선택번호 인풋번호를 맞추려고 시도하였으나 모든걸 맞췄는데 라벨의 번호가 안맞아서 실패... 그냥 번호를 빼는걸로 급선회 


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
            const fileIndex = currentItems + 1; // 새로 추가할 항목 번호 계산
            newItemDiv.innerHTML = `
                 <table>
                    <th class="table_hade">
                        <label for="file-input${fileIndex+1}">파일 선택${fileIndex+1}</label><br>
                    </th>
                    <td class="table_body">
                        <label class="select_title" for="file-input${fileIndex+1}">파일 선택</label><br>
                        <input type="file" id="file-input${fileIndex+1}" class="file-input" name="files[]"/>
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

    // 파일 번호 재조정 함수
    function reassignFileLabels() {
        const fileItems = formFilePlus.querySelectorAll('.item'); // 모든 항목
        fileItems.forEach((item, index) => {
            const input = item.querySelector('.file-input');
            const label = item.querySelector('label[for^="file-input"]');

            if (input && label) {
                const newIndex = index + 1; // 새 번호
                input.id = `file-input${newIndex}`; // ID 업데이트
                label.setAttribute('for', `file-input${newIndex}`); // for 속성 업데이트
                label.textContent = `파일 선택${newIndex}`; // 라벨 텍스트 업데이트
            }
        });
    }
});



  