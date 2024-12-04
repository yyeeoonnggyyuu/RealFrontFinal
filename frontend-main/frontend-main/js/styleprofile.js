document.addEventListener("DOMContentLoaded", () => {
    const postList = document.querySelector(".postlist");
    const tagList = document.querySelector(".taglist");
    const snsContainer = document.querySelector(".sns_container");
    
    // 게시글 데이터
    const postsData = [
        { 
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "아이디1",
            likes: "♡4",
            tags: "#겨울코디 #아우터추천"
        },
        { 
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "아이디2",
            likes: "♡7",
            tags: "#봄패션 #사이즈팁"
        },
        { 
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "아이디2",
            likes: "♡7",
            tags: "#봄패션 #사이즈팁"
        },
        { 
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "아이디2",
            likes: "♡7",
            tags: "#봄패션 #사이즈팁"
        },
        { 
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "아이디2",
            likes: "♡7",
            tags: "#봄패션 #사이즈팁"
        }
    ];

    // 태그글 데이터
    const tagsData = [
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그1",
            likes: "♡2",
            tags: "#추천상품 #태그상품"
        },
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그2",
            likes: "♡5",
            tags: "#여름상품 #핫딜"
        },
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그2",
            likes: "♡5",
            tags: "#여름상품 #핫딜"
        },
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그2",
            likes: "♡5",
            tags: "#여름상품 #핫딜"
        },
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그2",
            likes: "♡5",
            tags: "#여름상품 #핫딜"
        },
        {
            img: "https://fakeimg.pl/262x262/",
            userImg: "https://fakeimg.pl/26x26/",
            userId: "태그2",
            likes: "♡5",
            tags: "#여름상품 #핫딜"
        }
    ];

    // 데이터 렌더링 함수
    const renderData = (data) => {
        return `
            <ul class="detail_page_review_list_body">
                ${data.map(item => `
                    <li class="detail_page_review_list_item">
                        <div class="detail_page_review_list_item_img">
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="detail_page_review_content">
                            <div class="detail_page_review_title">
                                <img src="${item.userImg}" alt="" class="detail_page_review_title_img">
                                <span class="detail_page_review_title_id">${item.userId}</span>
                                <span class="detail_page_review_title_like">${item.likes}</span>
                            </div>
                            <p class="detail_page_review_body_tag">${item.tags}</p>
                        </div>
                    </li>
                `).join("")}
            </ul>
        `;
    };

    // 초기 상태 설정
    let isPostListActive = true;

    // 함수: 활성화 상태 변경
    const activateTab = (activeElement, inactiveElement, data) => {
        activeElement.style.fontWeight = "bold";
        activeElement.style.textDecoration = "underline";
        activeElement.style.marginBottom = "10px";

        inactiveElement.style.fontWeight = "normal";
        inactiveElement.style.textDecoration = "none";
        inactiveElement.style.marginBottom = "0";

        snsContainer.innerHTML = renderData(data);
    };

    // 첫 페이지 초기화
    activateTab(postList, tagList, postsData);

    // 게시글 클릭 이벤트
    postList.addEventListener("click", () => {
        if (!isPostListActive) {
            activateTab(postList, tagList, postsData);
            isPostListActive = true;
        }
    });

    // 태그상품 클릭 이벤트
    tagList.addEventListener("click", () => {
        if (isPostListActive) {
            activateTab(tagList, postList, tagsData);
            isPostListActive = false;
        }
    });
});
