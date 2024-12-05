import React from "react"
import '../css/TotalSearchHead.css';

const TotalSearchHead = () => {

    return (
        <>
            <div className="TotalSearchHead_full_screen">
                <div className="search">
                    <form action="">
                        <div className="search_container">
                            <input className="search_input" type="text" placeholder="Search" />
                        </div>
                    </form>
                </div>

                <div className="navi">
                    <ul>
                        <li><a  className="product" href="#">상품</a></li>
                        <li><a  className="style" href="#">스타일</a></li>
                        <li ><a className="profile" href="#">프로필</a></li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default TotalSearchHead;


