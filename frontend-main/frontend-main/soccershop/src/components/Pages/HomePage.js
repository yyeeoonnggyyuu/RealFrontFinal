import React from "react";
import Header from "../Header/Header"; // 경로에 주의하세요
import Main from "../Main/Main";
import Footer from "../Footer/footer";

function HomePage({ setIsLoggedIn }) {
  return (
    <div>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <Main />
      <Footer />
    </div>
  );
}

export default HomePage;