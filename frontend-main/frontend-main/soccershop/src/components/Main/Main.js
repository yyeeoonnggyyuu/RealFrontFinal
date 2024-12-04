import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper component import
import 'swiper/css'; // Import basic styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import "./Main.css";

const Header = () => {
  // Sample items for BEST and NEW items
  const items = [
    { id: 1, image: "/img/ACuniform.jpg", title: "ADIDAS 아르헨티나 1994 RETRO AWAY #10 (XS~2XL)", soldCount: 120, originalPrice: 209000, discountedPrice: 99000, discountRate: 53, description: "Official Licensed Product" },
    { id: 2, image: "/img/ALUniform.avif", title: "NIKE 브라질 2002 홈 유니폼 #9 (S~L)", soldCount: 200, originalPrice: 199000, discountedPrice: 129000, discountRate: 35, description: "Official Replica Jersey" },
    // More items...
  ];

  // Sorting items for best and new items
  const sortedBySales = [...items].sort((a, b) => b.soldCount - a.soldCount);
  const sortedByIdDesc = [...items].sort((a, b) => b.id - a.id);

  const [bestItems, setBestItems] = useState(sortedBySales.slice(0, 8));
  const [newItems, setNewItems] = useState(sortedByIdDesc.slice(0, 8));

  useEffect(() => {
    // You can fetch more items and update state as needed (for example, on scroll or button click)
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <main className="mainContainer">
      {/* Swiper Component for carousel */}
      <article className="slider">
        <Swiper loop autoplay={{ delay: 3000 }} navigation pagination={{ clickable: true }}>
          <SwiperSlide><img src="/img/manchestercity.png" alt="Image 1" /></SwiperSlide>
          <SwiperSlide><img src="/img/realmadrid.png" alt="Image 2" /></SwiperSlide>
          {/* Add more slides here */}
        </Swiper>
      </article>

      {/* BEST ITEM Section */}
      <article className="itemProduct">
        <div className="best">
          <h2 className="ProductTitle">
            BEST ITEM
            <span className="aaa">인기 제품을 여기서 한눈에 보세요</span>
          </h2>
          <div className="board_list_body">
            {bestItems.map((item) => (
              <div key={item.id} className="item">
                <div className="board_img"><img src={item.image} alt={item.title} /></div>
                <div className="board_content">
                  <div className="board_title"><a href="#">{item.title}</a></div>
                  <div className="board_price">
                    {item.discountedPrice && item.discountRate !== 0 ? (
                      <>
                        <span className="original-price" style={{ textDecoration: "line-through" }}>
                          {item.originalPrice.toLocaleString()}원
                        </span>
                        <span className="discounted-price">{item.discountedPrice.toLocaleString()}원</span>
                        <span className="discount-rate">{item.discountRate}%</span>
                      </>
                    ) : (
                      <span className="original-price">{item.originalPrice.toLocaleString()}원</span>
                    )}
                  </div>
                  <div className="board_name">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="moreBtn" onClick={() => setBestItems(sortedBySales.slice(8, 16))}>더보기</button>
        </div>
      </article>

      {/* NEW ITEM Section */}
      <article className="itemProduct">
        <div className="best">
          <h2 className="ProductTitle">
            NEW ITEM
            <span className="aaa">새 제품을 여기서 한눈에 보세요</span>
          </h2>
          <div className="board_list_body">
            {newItems.map((item) => (
              <div key={item.id} className="item">
                <div className="board_img"><img src={item.image} alt={item.title} /></div>
                <div className="board_content">
                  <div className="board_title"><a href="#">{item.title}</a></div>
                  <div className="board_price">
                    {item.discountedPrice && item.discountRate !== 0 ? (
                      <>
                        <span className="original-price" style={{ textDecoration: "line-through" }}>
                          {item.originalPrice.toLocaleString()}원
                        </span>
                        <span className="discounted-price">{item.discountedPrice.toLocaleString()}원</span>
                        <span className="discount-rate">{item.discountRate}%</span>
                      </>
                    ) : (
                      <span className="original-price">{item.originalPrice.toLocaleString()}원</span>
                    )}
                  </div>
                  <div className="board_name">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="moreBtn" onClick={() => setNewItems(sortedByIdDesc.slice(8, 16))}>더보기</button>
        </div>
      </article>
    </main>
  );
};

export default Header;
