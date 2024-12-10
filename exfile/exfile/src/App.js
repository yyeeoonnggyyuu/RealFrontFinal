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
import StyleMain from "./components/SocialContent//StyleMain/StyleMain.js";
import Styleprofile from "./components/SocialContent/StyleProfile/Styleprofile.js";
import StyleprofileMyInterestProduct from "./components/SocialContent/StyleProfile/StyleprofileMyInterestProduct.js";
import CheakoutPage from "./components/CheckoutPage/CheakoutPage.js";
import CheakoutPageAddress from "./components/CheckoutPage/CheakoutPageAddress.js";



function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes로 경로 설정 */}
        <Routes>
          <Route path="/BoardshoppingLi" element={<BoardshoppingLi />} />
          <Route path="/Doardshoppingsearch" element={<BoardshoppingSearch />} />
          <Route path="/Detailpage" element={<DetailPage />} />
          <Route path="/NewCreate" element={<NewCreate />} />  
          <Route path="/QnA" element={<QnA />} />
          <Route path="/SearchProduct" element={<SearchProduct />} />
          <Route path="/SearchProfile" element={<SearchProfile />} />
          <Route path="/SearchStyle" element={<SearchStyle />} />
          <Route path="/TotalSearchHead" element={<TotalSearchHead />} />
          <Route path="/StyleDetail" element={<StyleDetail />} />
          <Route path="/StyleMain" element={<StyleMain />} />
          <Route path="/Styleprofile" element={<Styleprofile />} />
          <Route path="/StyleprofileMyInterestProduct" element={<StyleprofileMyInterestProduct />} />
          <Route path="/CheakoutPage" element={<CheakoutPage />} />
          <Route path="/CheakoutPageAddress" element={<CheakoutPageAddress />} />
        

        </Routes>
      </div>
    </Router>
  );
}

export default App;
