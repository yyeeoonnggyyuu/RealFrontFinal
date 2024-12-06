import React, { useState, useRef } from "react";
import "./NewCreate.css";

const NewCreate = () => {
  const MAX_IMAGES = 5;
  const [imageInputs, setImageInputs] = useState([
    <div key={0}>
      <input type="file" name="files" accept="image/*" required />
      <span className="NewCreate_RepresentativeTag">대표</span>
    </div>,
  ]);
  const [fileNames, setFileNames] = useState([]);
  const [checkedImages, setCheckedImages] = useState([]);
  const [formData, setFormData] = useState({
    tag_id: "@아이디",
    tag_product: "@상품",
    tag_keyword: "@키워드",
    form_title: "제목을 입력해주세요",
    form_content: "",
  });
  const formRef = useRef(null);

  const addImageInput = () => {
    if (imageInputs.length < MAX_IMAGES) {
      setImageInputs([
        ...imageInputs,
        <div key={imageInputs.length}>
          <input
            type="file"
            name="files"
            accept="image/*"
            required
            onChange={(e) => handleFileChange(e)}
          />
        </div>,
      ]);
    }
  };

  const handleFileChange = (e) => {
    const fileName = e.target.files[0]?.name;
    if (fileNames.includes(fileName)) {
      alert("같은 파일을 중복해서 등록할 수 없습니다.");
      e.target.value = ""; // 파일 입력 초기화
    } else {
      setFileNames([...fileNames, fileName]);
    }
  };

  const handleImageCheckboxChange = (index) => {
    setCheckedImages((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const removeCheckedImages = () => {
    setImageInputs(imageInputs.filter((_, index) => !checkedImages.includes(index)));
    setCheckedImages([]);
    setFileNames(fileNames.filter((_, index) => !checkedImages.includes(index)));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 유효성 검사: 필수 항목 체크
    const requiredFields = [
      { name: "tag_id", label: "태그 아이디" },
      { name: "tag_product", label: "상품" },
      { name: "tag_keyword", label: "키워드" },
      { name: "form_title", label: "제목" },
      { name: "form_content", label: "내용" },
    ];

    // 입력 필드 체크
    for (let field of requiredFields) {
      const value = formData[field.name]?.trim();

      // 빈 필드 확인
      if (!value || value === "") {
        alert(`${field.label}을(를) 입력해주세요.`);
        return;
      }

      // @로 시작하는지 확인 (태그아이디, 상품, 키워드)
      if (["tag_id", "tag_product", "tag_keyword"].includes(field.name)) {
        if (!value.startsWith("@")) {
          alert(`${field.label}은(는) @로 시작해야 합니다.`);
          return;
        }
      }
    }

    // 이미지 첨부 체크
    if (fileNames.length === 0) {
      alert("이미지를 하나 이상 첨부해주세요.");
      return;
    }

    // 폼 제출 성공
    alert("폼이 성공적으로 제출되었습니다!");
    formRef.current.reset();
    setImageInputs([
      <div key={0}>
        <input type="file" name="files" accept="image/*" required />
        <span className="NewCreate_RepresentativeTag">TitleImage</span>
      </div>,
    ]);
    setFileNames([]);
    setFormData({
      tag_id: "@아이디",
      tag_product: "@상품",
      tag_keyword: "@키워드",
      form_title: "제목을 입력해주세요",
      form_content: "",
    });
  };

  return (
    <div className="NewCreate_full_screen">
      <form ref={formRef} className="NewCreate_Form" onSubmit={handleFormSubmit}>
        <h2 className="NewCreate_TitleText">게시글 작성</h2>
{/* 옵션 선택 */}
<div className="NewCreate_option_form">
          <div className="NewCreate_option_form_select">
            <select className="NewCreate_select_list">
              <option value="*" disabled>- 스포츠를 선택해 주세요 -</option>
              <option value="1">해외축구</option>
              <option value="2">국내축구</option>
              <option value="3">축구 국가대표</option>
              <option value="4">한국야구</option>
              <option value="5">여자배구</option>
              <option value="6">E-스포츠</option>
            </select>
          </div>
          <div className="NewCreate_option_form_select">
            <select className="NewCreate_select_list">
              <option value="*" disabled>- 구단을 선택해 주세요 -</option>
              <option value="1">울산 HD FC</option>
              <option value="2">김천상무 FC</option>
              <option value="3">강원 FC</option>
              <option value="4">포항 노틸러스</option>
              <option value="5">FC서울</option>
              <option value="6">수원FC</option>
              <option value="7">제주 유나이티드</option>
              <option value="8">대전 하나 시티즌</option>
              <option value="9">광주 FC</option>
              <option value="10">전북 현대 모터스</option>
              <option value="11">대구FC</option>
              <option value="12">인천 유나이티드</option>
            </select>
          </div>
        </div>
        <div className="NewCreate_option_form">
          <div className="NewCreate_option_form_select">
            <select className="NewCreate_select_list">
              <option value="*" disabled>- 사이즈를 선택해 주세요 -</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
            </select>
          </div>
          <div className="NewCreate_option_form_select">
            <select className="NewCreate_select_list">
              <option value="*" disabled>- 홈 어웨이 선택해 주세요 -</option>
              <option value="1">홈</option>
              <option value="2">어웨이</option>
            </select>
          </div>
        </div>


        {/* 이미지 입력 */}
        <div className="NewCreate_BoxLine">
          <div className="NewCreate_text_cover_file">
            <label className="NewCreate_Name_file">이미지 등록</label>
            <ul className="NewCreate_image_list_file">
              {imageInputs.map((input, index) => (
                <li key={index} className="NewCreate_f">
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
              disabled={imageInputs.length >= MAX_IMAGES}
            >
              + 이미지 추가
            </button>
            <button
              type="button"
              className="NewCreate_Btn_remove"
              onClick={removeCheckedImages}
              disabled={checkedImages.length === 0}
            >
              선택 이미지 삭제
            </button>
          </div>

          {/* 태그 및 텍스트 입력란 */}
          <div className="NewCreate_text_cover">
            <label className="NewCreate_Name" htmlFor="tag_id">
              태그 아이디
            </label>
            <div className="NewCreate_Input_cover">
              <input
                type="text"
                id="tag_id"
                name="tag_id"
                className="NewCreate_Text_input"
                value={formData.tag_id}
                onChange={handleInputChange}
                onFocus={(e) => { if (e.target.value === "@아이디") e.target.value = ""; }}
                onBlur={(e) => { if (e.target.value === "") e.target.value = "@아이디"; }}
              />
            </div>
          </div>

          <div className="NewCreate_text_cover">
            <label className="NewCreate_Name" htmlFor="tag_product">
              상품
            </label>
            <div className="NewCreate_Input_cover">
              <input
                type="text"
                id="tag_product"
                name="tag_product"
                className="NewCreate_Text_input"
                value={formData.tag_product}
                onChange={handleInputChange}
                onFocus={(e) => { if (e.target.value === "@상품") e.target.value = ""; }}
                onBlur={(e) => { if (e.target.value === "") e.target.value = "@상품"; }}
              />
            </div>
          </div>

          <div className="NewCreate_text_cover">
            <label className="NewCreate_Name" htmlFor="tag_keyword">
              키워드
            </label>
            <div className="NewCreate_Input_cover">
              <input
                type="text"
                id="tag_keyword"
                name="tag_keyword"
                className="NewCreate_Text_input"
                value={formData.tag_keyword}
                onChange={handleInputChange}
                onFocus={(e) => { if (e.target.value === "@키워드") e.target.value = ""; }}
                onBlur={(e) => { if (e.target.value === "") e.target.value = "@키워드"; }}
              />
            </div>
          </div>

          <div className="NewCreate_text_cover">
            <label className="NewCreate_Name" htmlFor="form_title">
              제목
            </label>
            <div className="NewCreate_Input_cover">
              <input
                type="text"
                id="form_title"
                name="form_title"
                className="NewCreate_Text_input"
                value={formData.form_title}
                onChange={handleInputChange}
                onFocus={(e) => { if (e.target.value === "제목을 입력해주세요") e.target.value = ""; }}
                onBlur={(e) => { if (e.target.value === "") e.target.value = "제목을 입력해주세요"; }}
              />
            </div>
          </div>

          <div className="cover_form_TextArea">
            <label className="NewCreate_Name_TextArea" htmlFor="form_content">
              내용
            </label>
            <textarea
              id="form_content"
              name="form_content"
              rows="3"
              value={formData.form_content}
              onChange={handleInputChange}
            />
          </div>

          <div className="NewCreate_text_cover_Btn">
            <button type="button" className="NewCreate_listBtn">
              목록
            </button>
            <button type="submit" className="NewCreate_primaryBtn">
              작성완료
            </button>
            <button type="button" className="NewCreate_dangerBtn">
              취소
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewCreate;
