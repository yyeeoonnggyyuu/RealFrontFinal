import React from "react";
import "../css/SearchProfile.css";
import TotalSearchHead from "./TotalSearchHead";

const SearchProfile = () => {
    return (
        <>
            <TotalSearchHead />
            {/* --------------------------------각각의 본문-------------------- */}
            <div className="SearchProfile_full">

                    <div className="feed_user">
                        <div className="user_img"><img src="https://fakeimg.pl/60x60/" alt="" /></div>
                        <div className="user_information">
                            <a href="#">
                                <div className="user_id">아이디</div>
                                <div className="user_message">맨시티팬이다 프로필검색시 필요</div>
                            </a>
                        </div>
                        <div className="btn">
                            <button className="follow_btn">팔로우</button>
                        </div>
                    </div>
                    

            </div>

        </>
    );
};

export default SearchProfile;
