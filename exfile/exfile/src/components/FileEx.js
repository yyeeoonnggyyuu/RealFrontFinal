import React, { useState } from 'react';
import './FileEx.css';

const NewCreate = () => {
  const [imageInputs, setImageInputs] = useState([<input key={0} type="file" name="files" accept="image/*" />]);
  const [checkedInputs, setCheckedInputs] = useState([]);

  // 이미지 입력란 추가
  const addImageInput = () => {
    if (imageInputs.length < 5) {
      setImageInputs([...imageInputs, <input key={imageInputs.length} type="file" name="files" accept="image/*" />]);
    } else {
      alert("이미지는 최대 5개까지 첨부 가능합니다.");
    }
  };

  // 이미지 입력란 삭제
  const removeImageInput = (index) => {
    const newInputs = imageInputs.filter((_, i) => i !== index);
    setImageInputs(newInputs);
    setCheckedInputs(checkedInputs.filter(i => i !== index));  // 삭제한 항목의 체크 상태도 초기화
  };

  // 선택된 이미지 삭제
  const removeCheckedInputs = () => {
    const newInputs = imageInputs.filter((_, index) => !checkedInputs.includes(index));
    setImageInputs(newInputs);
    setCheckedInputs([]);  // 선택된 체크박스 초기화
  };

  // 전체 이미지 삭제
  const removeAllInputs = () => {
    setImageInputs([]);
    setCheckedInputs([]); // 전체 삭제 시 체크 상태도 초기화
  };

  // 체크박스 상태 업데이트
  const handleCheckboxChange = (index) => {
    if (checkedInputs.includes(index)) {
      setCheckedInputs(checkedInputs.filter(i => i !== index));
    } else {
      setCheckedInputs([...checkedInputs, index]);
    }
  };

  // 폼 제출
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('폼이 제출되었습니다!');
  };

  return (
    <div className="NewCreate_full_screen">
      <form className="NewCreate_Form" onSubmit={handleFormSubmit}>
        <h2 className="NewCreate_TitleText">게시글 작성</h2>

        {/* 선택 폼 */}
        <div className="NewCreate_option_form">
          <select className="NewCreate_select_list">
            <option value="*" disabled>- 스포츠를 선택해 주세요 -</option>
            <option value="1">해외축구</option>
            <option value="2">국내축구</option>
          </select>
          <select className="NewCreate_select_list">
            <option value="*" disabled>- 구단을 선택해 주세요 -</option>
            <option value="1">울산 HD FC</option>
            <option value="2">김천상무 FC</option>
          </select>
        </div>

        {/* 이미지 입력 */}
        <div className="NewCreate_BoxLine">
          <label className="NewCreate_Name">이미지 등록</label>
          <div className="NewCreate_image_list">
            {imageInputs.map((input, index) => (
              <div key={index} className="NewCreate_image_input">
                <input 
                  type="checkbox" 
                  checked={checkedInputs.includes(index)} 
                  onChange={() => handleCheckboxChange(index)} 
                />
                {input}
              </div>
            ))}
          </div>
          <button type="button" className="NewCreate_AddBtn" onClick={addImageInput}>
            + 이미지 추가
          </button>
          <button type="button" className="NewCreate_RemoveAllBtn" onClick={removeAllInputs}>
            전체 삭제
          </button>
          <button type="button" className="NewCreate_RemoveSelectedBtn" onClick={removeCheckedInputs}>
            선택 삭제
          </button>
        </div>

        {/* 태그 아이디 */}
        <div className="NewCreate_text_cover">
          <label className="NewCreate_Name">태그 아이디</label>
          <input type="text" className="NewCreate_Text_input" />
        </div>

        {/* 제목 입력 */}
        <div className="NewCreate_text_cover">
          <label className="NewCreate_Name">제목</label>
          <input type="text" className="NewCreate_Text_input" />
        </div>

        {/* 내용 입력 */}
        <div className="cover_form_TextArea">
          <label className="NewCreate_Name_TextArea">내용</label>
          <textarea rows="5" className="NewCreate_TextArea"></textarea>
        </div>

        {/* 버튼 */}
        <div className="NewCreate_text_cover_Btn">
          <button type="submit" className="NewCreate_primaryBtn">작성완료</button>
        </div>
      </form>
    </div>
  );
};

export default NewCreate;
