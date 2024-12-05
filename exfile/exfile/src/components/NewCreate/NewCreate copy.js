import React, { useState } from 'react';
import './NewCreate.css';

const NewCreate = () => {
  const MAX_IMAGES = 5; // 최대 이미지 개수
  const [imageInputs, setImageInputs] = useState([
    <div key={0}>
      <input type="file" name="files" accept="image/*" required />
      <span className="NewCreate_RepresentativeTag">TitleImage</span>
    </div>,
  ]);
  const [checkedImages, setCheckedImages] = useState([]);

  // 이미지 추가
  const addImageInput = () => {
    if (imageInputs.length < MAX_IMAGES) {
      setImageInputs([
        ...imageInputs,
        <input key={imageInputs.length} type="file" name="files" accept="image/*" required />,
      ]);
    } 
  };

  // 체크박스 상태 관리
  const handleImageCheckboxChange = (index) => {
    setCheckedImages((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // 선택된 이미지 삭제
  const removeCheckedImages = () => {
    setImageInputs(imageInputs.filter((_, index) => !checkedImages.includes(index)));
    setCheckedImages([]);
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

        <div className="NewCreate_BoxLine">
          <div className="NewCreate_text_cover_file">
            <label className="NewCreate_Name_file">이미지 등록</label>
            <ul className="NewCreate_image_list_file">
              {imageInputs.map((input, index) => (
                <li key={index}>
                  {input}
                  {index > 0 && (
                    <input
                      type="checkbox"
                      className="NewCreate_img_checkbox"
                      checked={checkedImages.includes(index)}
                      onChange={() => handleImageCheckboxChange(index)}
                    />
                  )}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="NewCreate_Btn_add"
              onClick={addImageInput}
              disabled={imageInputs.length >= MAX_IMAGES} // 5개 이상이면 버튼 비활성화
            >
              + 이미지 추가
            </button>
            <button
              type="button"
              className="NewCreate_Btn_remove"
              onClick={removeCheckedImages}
              disabled={checkedImages.length === 0} // 선택된 체크박스가 없으면 비활성화
            >
              선택 이미지 삭제
            </button>
          </div>

          {/* 태그 및 텍스트 입력란 */}
          <div className="NewCreate_text_cover">
            <label className="NewCreate_Name" htmlFor="tag_id">태그 아이디</label>
            <div className="NewCreate_Input_cover">
              <input type="text" id="tag_id" name="tag_id" className="NewCreate_Text_input" defaultValue="@아이디" />
            </div>
          </div>

          <div className="NewCreate_text_cover">
            <label className="NewCreate_Name" htmlFor="tag_product">상품</label>
            <div className="NewCreate_Input_cover">
              <input type="text" id="tag_product" name="tag_product" className="NewCreate_Text_input" defaultValue="@상품" />
            </div>
          </div>

          <div className="NewCreate_text_cover">
            <label className="NewCreate_Name" htmlFor="tag_keyword">키워드</label>
            <div className="NewCreate_Input_cover">
              <input type="text" id="tag_keyword" name="tag_keyword" className="NewCreate_Text_input" defaultValue="@키워드" />
            </div>
          </div>

          <div className="NewCreate_text_cover">
            <label className="NewCreate_Name" htmlFor="form_title">제목</label>
            <div className="NewCreate_Input_cover">
              <input type="text" id="form_title" name="form_title" className="NewCreate_Text_input" defaultValue="제목을 입력해주세요" />
            </div>
          </div>

          <div className="cover_form_TextArea">
            <label className="NewCreate_Name_TextArea" htmlFor="form_content">내용</label>
            <textarea id="form_content" name="form_content" rows="3"></textarea>
          </div>

          <div className="NewCreate_text_cover_Btn">
            <button type="button" className="NewCreate_listBtn">목록</button>
            <button type="submit" className="NewCreate_primaryBtn">작성완료</button>
            <button type="button" className="NewCreate_dangerBtn">취소</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewCreate;
