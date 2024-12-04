// // src/App.js
// import React from 'react';
// import BoardshoppingLi from './components/BoardshoppingLi'; 
// import BoardshoppingSearch from './components/BoardshoppingSearch';
// import DetailPage from './components/DetailPage';

// function App() {
//   return (
//     <div className="App">
//       {/* <BoardshoppingLi /> */}
//       {/* <BoardshoppingSearch /> */}
//       <DetailPage />
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardshoppingLi from './components/BoardshoppingLi.js'; 
import BoardshoppingSearch from './components/BoardshoppingSearch.js';
import DetailPage from './components/DetailPage.js';
import NewCreate from './components/NewCreate.js';
import QnA from './components/QnA.js';
import SearchProduct from "./components/SearchProduct.js";
import SearchProfile from "./components/SearchProfile.js";
import SearchStyle from "./components/SearchStyle.js";
import StyleDetail from "./components/StyleDetail.js";
import Stylemmain from "./components/Stylemmain.js";
import Styleprofile from "./components/Styleprofile.js";
import TotalSearchHead from "./components/TotalSearchHead.js";



function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes로 경로 설정 */}
        <Routes>
          <Route path="/BoardshoppingLi" element={<BoardshoppingLi />} />
          <Route path="/boardshoppingsearch" element={<BoardshoppingSearch />} />
          <Route path="/detailpage" element={<DetailPage />} />
          <Route path="/NewCreate" element={<NewCreate />} /> 
          <Route path="/QnA" element={<QnA />} />
          <Route path="/SearchProduct" element={<SearchProduct />} />
          <Route path="/SearchProfile" element={<SearchProfile />} />
          <Route path="/SearchStyle" element={<SearchStyle />} />
          <Route path="/StyleDetail" element={<StyleDetail />} />
          <Route path="/Stylemmain" element={<Stylemmain />} />
          <Route path="/Styleprofile" element={<Styleprofile />} />{/* 아이템 추가시 세로로 정렬됨 이건 js로 해결해봐야함 */}
          <Route path="/TotalSearchHead" element={<TotalSearchHead />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
