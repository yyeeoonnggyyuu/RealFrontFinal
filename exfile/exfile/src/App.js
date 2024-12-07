// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardshoppingLi from './components/BoardshoppingList/BoardshoppingLi.js'; 
import BoardshoppingSearch from './components/BoardshoppingSearch/BoardshoppingSearch.js';
import DetailPage from './components/DetailPage/DetailPage.js';
import NewCreate from './components/NewCreate/NewCreate.js';
import QnA from './components/QnA/QnA.js';
import SearchProduct from "./components/SearchPages/SearchProduct.js";
import SearchProfile from "./components/SearchPages/SearchProfile.js";
import SearchStyle from "./components/SearchPages/SearchStyle.js";
import TotalSearchHead from "./components/SearchPages/TotalSearchHead.js";
import StyleDetail from "./components/SocialContent/StyleDetail.js";
import Stylemmain from "./components/SocialContent//StyleMain/Stylemmain.js";
import Styleprofile from "./components/SocialContent/StyleProfile/Styleprofile.js";
import StyleprofileMyInterestProduct from "./components/SocialContent/StyleProfile/StyleprofileMyInterestProduct.js";
import Maso from "./Maso.js";



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
          <Route path="/TotalSearchHead" element={<TotalSearchHead />} />
          <Route path="/StyleDetail" element={<StyleDetail />} />
          <Route path="/Stylemmain" element={<Stylemmain />} />
          <Route path="/Styleprofile" element={<Styleprofile />} />
          <Route path="/StyleprofileMyInterestProduct" element={<StyleprofileMyInterestProduct />} />
          <Route path="/Maso" element={<Maso />} />

        

        </Routes>
      </div>
    </Router>
  );
}

export default App;
