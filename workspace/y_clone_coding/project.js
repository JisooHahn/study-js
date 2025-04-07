// swiperWrapper = 1550 px
// 이게 배너 전체영역
// swiperSlide 310 px - 각 배너 이미지 하나씩
// 왼오 페이지 버튼 - swiperButtonLeft, swiperButtonRight
// 4/4같이 페이지 보여주는거 - swiperPagination에서 paginationCurrent / 4 로 쓰면 될듯
// 4페이지에서 다음 누르면 1페이지로 넘어가짐..메인 배너 만든 함수에서 오토슬라이드 기능만 빼면 될듯

window.addEventListener("scroll", () => {
    console.log("현재 스크롤 위치:", window.scrollY);
});
// 1118px?

// 일정 스크롤 위치에 도달하면 fixed로 변경하는 JavaScript
const navigation = document.querySelector(".contentsNavigation");
const subNavigation = document.querySelector(".sectionTabsWrap");
const sideSelection = document.querySelector(".rewardsSc");
const threshold = 1118; // 스크롤 위치 기준 (픽셀)
const sideThreshold = 1500;
const sideThresholdD = 56461;

window.addEventListener("scroll", () => {
    if (window.scrollY >= threshold) {
        // 스크롤 위치가 기준값 이상이면 fixed로 변경
        navigation.style.position = "fixed";
        subNavigation.style.position = "fixed";
        navigation.style.top = "0";
        subNavigation.style.top = `56px`;
        navigation.style.width = "100%"; // 너비 100%로 고정
    } else {
        // 기준값 이하로 돌아오면 원래대로
        navigation.style.position = "relative";
        subNavigation.style.position = "relative";
        navigation.style.top = "auto";
        subNavigation.style.top = "auto";
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= sideThreshold && sideThresholdD >= window.scrollY) {
        // 스크롤 위치가 기준값 이상이면 fixed로 변경
        sideSelection.style.position = "fixed";
        sideSelection.style.top = "0";
        sideSelection.style.width = "353px";
    } else {
        // 기준값 이하로 돌아오면 원래대로
        sideSelection.style.position = "relative";
        sideSelection.style.top = "auto";
    }
});

// 슬라이드 배너
const firstBanner = document.createElement("div");
const lastBanner = document.createElement("div");
const banner = document.querySelector("div.swiperWrapper");
const leftArrow = document.querySelector(".swiperButtonLeft");
console.log(leftArrow);
const rightArrow = document.querySelector(".swiperButtonRight");
const swiperPage = document.querySelector(".swiperPagination");

let count = 1; // 첫 번째 슬라이드부터 시작

firstBanner.innerHTML = `<div class="swiperSlide">
                                                    <div class="reviewItemWrapper">
                                                        <div class="reviewItemContainer">
                                                            <div class="reviewImgContainer">
                                                                <img src="https://tumblbug-images.imgix.net/reviews/64721a20-70b4-4d6a-9089-e12ae032fea5.jpeg?auto=format%2Ccompress&fit=clip&w=1240" class="reviewItemImg" />
                                                                <div class="reviewImgCount">+ 5</div>
                                                            </div>
                                                            <div>
                                                                <div class="itemPickBadgeWrapper">
                                                                    <div class="reviewPickBadge">창작자 Pick</div>
                                                                </div>
                                                                <p class="reviewItemContentsB">벌써 2번째 펀딩해봤는데...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`;

lastBanner.innerHTML = `<div class="swiperSlide">
                                                    <div class="reviewItemWrapper">
                                                        <div class="reviewItemContainer">
                                                            <div class="reviewImgContainer">
                                                                <img src="https://tumblbug-images.imgix.net/reviews/5e7c29e4-549d-4717-9bae-f3a33405c2d2.jpeg?auto=format%2Ccompress&fit=clip&w=1240" class="reviewItemImg" />
                                                            </div>
                                                            <div>
                                                                <div class="itemPickBadgeWrapper"></div>
                                                                <p class="reviewItemContents">왕 크니까 왕 귀여운 마우스 패드~</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`;

banner.appendChild(firstBanner); // 첫 번째 슬라이드 추가
banner.prepend(lastBanner); // 마지막 슬라이드 추가

banner.style.transform = `translateX(-310px)`; // 첫 번째 페이지가 보이도록 설정

const autoSlide = () => {
    count++;
    banner.style.transform = `translate(-${310 * count}px)`;
    banner.style.transition = `transform 0.5s ease`;

    // 마지막 페이지라면 처음으로 이동시키기
    if (count === 5) {
        setTimeout(() => {
            banner.style.transform = `translate(-310px)`;
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }
    swiperPage.innerHTML = `<span class="paginationCurrent">${count}</span> / <span class="paginationTotal">4</span>`;
};

let autoSlideInterval = setInterval(autoSlide, 400000);

let arrowCheck = true;

// 왼쪽 화살표 버튼 클릭 이벤트
leftArrow.addEventListener("click", () => {
    if (!arrowCheck) return;
    arrowCheck = false;
    clearInterval(autoSlideInterval);

    count--;
    banner.style.transform = `translate(-${310 * count}px)`;
    banner.style.transition = `transform 0.5s`;

    // 처음 이미지에서 왼버튼을 누르면
    if (count === 0) {
        setTimeout(() => {
            banner.style.transform = `translate(-1550px)`; // 마지막 슬라이드로 돌아가는 설정
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 4;
    }

    swiperPage.innerHTML = `<span class="paginationCurrent">${count}</span> / <span class="paginationTotal">4</span>`;

    autoSlideInterval = setInterval(autoSlide, 400000); // 자동 슬라이드 재시작
    setTimeout(() => {
        arrowCheck = true;
    }, 500);
});

// 오른쪽 화살표 버튼 클릭 이벤트
rightArrow.addEventListener("click", () => {
    if (!arrowCheck) return;
    arrowCheck = false;
    clearInterval(autoSlideInterval);

    count++;
    banner.style.transform = `translate(-${310 * count}px)`;
    banner.style.transition = `transform 0.5s`;

    // 마지막 이미지에서 오른버튼을 누르면
    if (count === 5) {
        setTimeout(() => {
            banner.style.transform = `translate(-310px)`; // 처음으로 돌아가는 설정
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }

    swiperPage.innerHTML = `<span class="paginationCurrent">${count}</span> / <span class="paginationTotal">4</span>`;

    autoSlideInterval = setInterval(autoSlide, 400000); // 자동 슬라이드 재시작
    setTimeout(() => {
        arrowCheck = true;
    }, 500);
});
