// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardshoppingLi from './components/BoardshoppingList/BoardshoppingLi.js'; 
import BoardshoppingSearch from './components/BoardshoppingSearch/BoardshoppingSearch.js';
import DetailPage from './components/DetailPage/DetailPage.js';
//완성
import NewCreate from './components/NewCreate/NewCreate.js';
//유효성 검사 다시해야함
//완성
import QnA from './components/QnA/QnA.js';
import SearchProduct from "./components/SearchPages/SearchProduct.js";
import SearchProfile from "./components/SearchPages/SearchProfile.js";
import SearchStyle from "./components/SearchPages/SearchStyle.js";
import TotalSearchHead from "./components/SearchPages/TotalSearchHead.js";
//완성
import StyleDetail from "./components/SocialContent/StyleDetail.js";
import Stylemmain from "./components/SocialContent/Stylemmain.js";
import Styleprofile from "./components/SocialContent/Styleprofile.js";
//아직 완성 x 


import FileEx from "./components/FileEx.js";

import DetailInformation from "./components/DetailPage/DetailPageLement/DetailInformation.js";



function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes로 경로 설정 */}
        <Routes>
          <Route path="/BoardshoppingLi" element={<BoardshoppingLi />} />
          <Route path="/boardshoppingsearch" element={<BoardshoppingSearch />} />

          <Route path="/detailpage" element={<DetailPage />} />
          <Route path="/NewCreate" element={<NewCreate />} />  {/*작성 안됨 유효성 검사*/} 
          <Route path="/QnA" element={<QnA />} />

          <Route path="/SearchProduct" element={<SearchProduct />} />
          <Route path="/SearchProfile" element={<SearchProfile />} />
          <Route path="/SearchStyle" element={<SearchStyle />} />
          <Route path="/TotalSearchHead" element={<TotalSearchHead />} />

          <Route path="/StyleDetail" element={<StyleDetail />} />
          <Route path="/Stylemmain" element={<Stylemmain />} />
          <Route path="/Styleprofile" element={<Styleprofile />} />

         
          <Route path="/DetailInformation" element={<DetailInformation />} />


          <Route path="/FileEx" element={<FileEx />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
