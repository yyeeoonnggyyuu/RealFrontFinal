import React, { useState } from "react";
import '../css/NewCreate.css';

const NewCreate = () => {
    const [imageList, setImageList] = useState([]);

    const addImageInput = () => {
        setImageList([...imageList, '']);
    };

    const handleFileChange = (e) => {
        // 파일 처리 로직
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 폼 제출 로직
    };

    return (
        <div className="New_Create_full_screen">
            {/* ------------------게시글 작성----------------- */}
            <form className="NewCreate_write_container" onSubmit={handleSubmit}>
                <h2 className="NewCreate_write_header">게시글 작성</h2>

                {/* ---------------------select 전체적인 폼양식 -------------- */}
                <div className="NewCreate_select_01">
                    <div className="NewCreate_select_01_01">
                        <select className="NewCreate_select_list" style={{ option_style: 'select' }}>
                            <option value="*" selected>
                                - 스포츠를 선택해 주세요 -
                            </option>
                            <option value="**" disabled>
                                -------------------
                            </option>
                            <option value="1">해외축구</option>
                            <option value="2">국내축구</option>
                            <option value="3">축구 국가대표</option>
                            <option value="4">한국야구</option>
                            <option value="5">여자배구</option>
                            <option value="6">E-스포츠</option>
                        </select>
                    </div>

                    <div className="NewCreate_select_01_01">
                        <select className="NewCreate_select_list" style={{ option_style: 'select' }}>
                            <option value="*" selected>
                                - 구단을 선택해 주세요 -
                            </option>
                            <option value="**" disabled>
                                -------------------
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>

                <div className="NewCreate_select_01">
                    <div className="NewCreate_select_01_01">
                        <select className="NewCreate_select_list" style={{ option_style: 'select' }}>
                            <option value="*" selected>
                                - 사이즈를 선택해 주세요 -
                            </option>
                            <option value="**" disabled>
                                -------------------
                            </option>
                            <option value="1">S</option>
                            <option value="2">M</option>
                            <option value="3">L</option>
                            <option value="4">XL</option>
                            <option value="5">XXL</option>
                            <option value="6">XXXL</option>
                        </select>
                    </div>

                    <div className="NewCreate_select_01_01">
                        <select className="NewCreate_select_list" style={{ option_style: 'select' }}>
                            <option value="*" selected>
                                - 홈 어웨이 선택해 주세요 -
                            </option>
                            <option value="**" disabled>
                                -------------------
                            </option>
                            <option value="1">홈</option>
                            <option value="2">어웨이</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>

                {/* ---------------------사진 파일 선택 ----------------  */}

                <div className="NewCreate_text_line">
                <div className="NewCreate_cover_form_file">
                    <table>
                        <thead>
                           <p>파일 선택</p>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="">
                                    <div className="">
                                        파일을 추가하시려면 +을 눌러주세요
                                    </div>
                             
                                </td>
                                <td>
                                <button type="" className="NewCreate_file_plus_button">
                                        +
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* ----------------------------태그 -----------------------  */}

                <div className="NewCreate_cover_form_file">
                    <table>
                        <thead>
                               <label className="" htmlFor="tag_id">
                                        태그 아이디
                                </label>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="NewCreate_table_body" style={{ height: '60px' }}>
                                    <input type="text" id="tag_id" name="tag_id" className="NewCreate_tag_td_id" value="@아이디" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="NewCreate_cover_form_file">
                    <table>
                        <thead>
                               <label className="" htmlFor="tag_id">
                               상품
                                </label>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="NewCreate_table_body" style={{ height: '60px' }}>
                                    <input type="text" id="tag_product" name="tag_product" className="NewCreate_tag_product" value="@상품" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="NewCreate_cover_form_file">
                    <table>
                        <thead>
                               <label className="" htmlFor="tag_id">
                               키워드
                                </label>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="NewCreate_table_body" style={{ height: '60px' }}>
                                    <input type="text" id="tag_keyword" name="tag_keyword" className="NewCreate_tag_keyword" value="@키워드" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

      {/* ---------------------제목 및 본문 ---------------- --> */}
      
      <div className="NewCreate_cover_form_file">
                    <table>
                        <thead>
                               <label className="" htmlFor="tag_id">
                               제목
                                </label>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="NewCreate_table_body" style={{ height: '60px' }}>
                                    <input type="text" id="form_title" name="form_title" value="제목을 입력해주세요" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="NewCreate_cover_form_file" style={{height: 'auto'}}>
                    <table>
                        <thead>
                               <label className="" htmlFor="tag_id">
                               내용
                                </label>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="NewCreate_table_body_content">
                                    <textarea rows="3" id="form_content" name="form_content"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*  ----------------------- 버튼-----------------------  */}
                <div className="NewCreate_btn-head">
                    <table>
                        <thead>
                        <button type="button" className="NewCreate_btn-list">
                                        목록
                                    </button>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="NewCreate_table_body_btn">
                                    <button type="submit" className="NewCreate_btn-primary">
                                        작성완료
                                    </button>
                                    <button type="button" className="NewCreate_btn-danger">
                                        취소
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </form>
        </div>

    );
};



export default NewCreate;