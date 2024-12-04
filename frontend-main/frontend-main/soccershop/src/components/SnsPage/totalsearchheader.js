document.addEventListener('DOMContentLoaded', function(){

    const selectedProduct = document.querySelector('.product');
    const selectedstyle = document.querySelector('.style');
    const selectedprofile = document.querySelector('.profile');

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
    activateTab(product, style, profile);

    // 게시글 클릭 이벤트
    postList.addEventListener("click", () => {
        if (!isPostListActive) {
            activateTab(product, style, profile);
            isPostListActive = true;
        }
    });

    // 태그상품 클릭 이벤트
    tagList.addEventListener("click", () => {
        if (isPostListActive) {
            activateTab(product, style, profile);
            isPostListActive = false;
        }
    });
 });



//  ----------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const product = document.querySelector('.product');
    const style = document.querySelector('.style');
    const profile = document.querySelector('.profile');
    const snsContainer = document.getElementById('snsContainer');

    // 임시 데이터 (예시)
    const postsData = ['Post 1', 'Post 2', 'Post 3'];  // 예시 게시글 데이터
    const tagsData = ['Tag 1', 'Tag 2', 'Tag 3'];    // 예시 태그 데이터
    const profileData = ['Profile 1', 'Profile 2', 'Profile 3']; // 예시 프로필 데이터

    // renderData 함수 정의: 데이터를 HTML로 변환
    const renderData = (data) => {
        return data.map(item => `<div>${item}</div>`).join('');
    };

    // 활성화 상태 변경
    const activateTab = (activeElement, inactiveElement, data) => {
        activeElement.style.fontWeight = "bold";
        activeElement.style.textDecoration = "underline";
        activeElement.style.marginBottom = "10px";

        inactiveElement.style.fontWeight = "normal";
        inactiveElement.style.textDecoration = "none";
        inactiveElement.style.marginBottom = "0";

        snsContainer.innerHTML = renderData(data);
    };

    // URL 해시 변경에 따라 화면을 전환
    const handleTabChange = () => {
        const hash = window.location.hash;

        if (hash === '#product') {
            activateTab(product, style, postsData);
        } else if (hash === '#style') {
            activateTab(style, product, tagsData);
        } else if (hash === '#profile') {
            activateTab(profile, product, profileData);
        }
    };

    // 첫 페이지 초기화 (기본 해시로 초기화)
    handleTabChange();

    // 해시 변경 시 화면 업데이트
    window.addEventListener('hashchange', handleTabChange);

    // 탭 클릭 이벤트
    product.addEventListener("click", () => {
        window.location.hash = '#product'; // 해시를 #product로 변경
    });

    style.addEventListener("click", () => {
        window.location.hash = '#style'; // 해시를 #style로 변경
    });

    profile.addEventListener("click", () => {
        window.location.hash = '#profile'; // 해시를 #profile로 변경
    });
});