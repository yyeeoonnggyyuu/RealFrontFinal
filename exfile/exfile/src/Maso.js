import React from "react";
import Masonry from "react-masonry-css";
import "./Maso.css"; // 스타일 파일

const images = [
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/280x180",
  "https://via.placeholder.com/500x400",
  "https://via.placeholder.com/350x250",
  "https://via.placeholder.com/420x280",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/280x180",
  "https://via.placeholder.com/500x400",
  "https://via.placeholder.com/350x250",
  "https://via.placeholder.com/420x280",
];

const App = () => {
  return (
    <div className="container">
      <Masonry
        breakpointCols={4} // 한 줄에 4개씩 배치
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, index) => (
          <div key={index} className="image-wrapper">
            <img src={src} alt={`img-${index}`} className="image" />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default App;
