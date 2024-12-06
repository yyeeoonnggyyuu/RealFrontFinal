import React from 'react';
import './ProfileMyInterests.css';
import { Link } from 'react-router-dom';

const ProfileMyInterests = ({ myInterests }) => {
    return (
        <>

                <ul className="ProfileMyInterests_detail_page_review_list_body">
                    {myInterests.map((item, index) => (
                        <Link to='/StyleDetail'>
                            <li key={index} className="ProfileMyInterests_detail_page_review_list_item">
                                    <img src={item.img} alt="interestData" className='ProfileMyInterests_detail_page_review_list_item_img' />
                                    <span className="ProfileMyInterests_detail_page_review_title_id">{item.userId}</span>                                   
                                        <p className="ProfileMyInterests_etail_page_review_MyInterests">{item.myInterests}</p>

                            </li>
                        </Link>

                    ))}
                </ul>
</>

    );
};

export default ProfileMyInterests;