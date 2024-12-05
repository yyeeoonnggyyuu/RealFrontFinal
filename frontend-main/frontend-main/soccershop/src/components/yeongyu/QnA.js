import React from "react";
import "../css/QnA.css";

const QnA = () => {
  return (
    <div className="QnA_full_screen">
      <div className="QnA_title_logo">
        <h2>Q&A</h2>
      </div>

      <div className="QnA_notice_board">
        <table border="1">
          <colgroup>
            <col style={{ width: "80px" }} />
            <col style={{ width: "100px" }} />
            <col style={{ width: "910px" }} />
            <col style={{ width: "150px" }} />
            <col style={{ width: "120px" }} />
          </colgroup>
          <thead className="QnA_board_thead">
            <tr>
              <th scope="col">번호</th>
              <th scope="col">상품정보</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">작성일</th>
            </tr>
          </thead>
          <tbody className="QnA_board_tbody">
            <tr>
              <td>
                <span>10000</span>
              </td>
              <td>
                <a href="#">
                  <img
                    src="https://placehold.co/70x70"
                    alt="Placeholder"
                  />
                </a>
              </td>
              <td className="QnA_tbody_title">
                <a href="#">
                  <p>NIKE 리버풀 23/24 ADV-MATCH AWAY KIT [프리미어리그]</p>
                </a>
              </td>
              <td>
                <span>아이디</span>
              </td>
              <td>
                <span>작성일</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="QnA_notice_form">
        <select className="QnA_selArray" id="search_date" name="search_date">
          <option value="week">일주일</option>
          <option value="month">한달</option>
          <option value="month3">세달</option>
          <option value="all">전체</option>
        </select>
        <select className="QnA_selArray" id="search_key" name="search_key">
          <option value="subject">제목</option>
          <option value="content">내용</option>
          <option value="writer_name">글쓴이</option>
          <option value="member_id">아이디</option>
          <option value="nick_name">별명</option>
          <option value="product">상품정보</option>
        </select>
        <input
          id="search"
          name="search"
          className="QnA_inputTypeText"
          placeholder=""
          type="text"
        />
        <a
          href="#none"
          className="QnA_btnNormal"
          onClick={() => console.log("찾기 버튼 클릭됨")}
        >
          찾기
        </a>
      </div>

      <div className="QnA_paging">
        <ul id="paging_ul" className="QnA_paging_ul">
          <li>
            <a href="#" className="QnA_disabled">
              &lt;&lt;
            </a>
          </li>
          <li>
            <a href="#" className="QnA_disabled">
              &lt;
            </a>
          </li>
          <li>
            <a href="#" className="QnA_active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">&gt;</a>
          </li>
          <li>
            <a href="#">&gt;&gt;</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QnA;
