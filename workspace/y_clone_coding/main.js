// 현재 시간 0000-00-00 00:00 형식으로 출력
const currentDate = new Date();

const year = currentDate.getFullYear().toString().slice(-2); //연도의 두 자리만 가져오기
// month는 0부터 시작하니까 일반적인 표기로 쓰려면 1을 더해야함
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const finalDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

const styledTime = document.querySelector(".styledTime");

styledTime.innerText = finalDate + "기준";

const monthDate = `${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:00`;

const updateDate = document.querySelector(".updateDate");

updateDate.innerText = monthDate + "기준";

const cardImageWrapper = document.querySelectorAll(".cardImageWrapper");
const basicProjectImage = document.querySelectorAll(".basicProjectImage");

cardImageWrapper.forEach((wrapper) => {
    const image = wrapper.querySelector(".imageSc");

    wrapper.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.1)";
    });
    wrapper.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });
});

// 슬라이드 배너
const firstBanner = document.createElement("div");
const lastBanner = document.createElement("div");
const banner = document.querySelector("div.swiperWrapper");
const leftArrow = document.querySelector(".navButton-left");
const rightArrow = document.querySelector(".navButton-right");
const swiperPage = document.querySelector("span.paginationCurrent");

let count = 1;

// 다 포함시키기 상당히 번거로운데 div를 통째로 집어넣지 않으면 보이지가 않는다...
firstBanner.innerHTML = `
<div class="banner">
                                            <nav
                                                href="https://tumblbug.com/thomsoniae_solar_system?ref=%EB%A9%94%EC%9D%B8%2F%EB%B0%B0%EB%84%88"
                                                class="heroLink"
                                            >
                                                <div
                                                    class="bannerimg bnimg1"
                                                ></div>
                                            </nav>
                                        </div>
`;

lastBanner.innerHTML = `
<div class="banner">
                                            <nav
                                                href="https://tumblbug.com/matchachoco?ref=%EB%A9%94%EC%9D%B8%2F%EB%B0%B0%EB%84%88"
                                                class="heroLink"
                                            >
                                                <div
                                                    class="bannerimg bnimg4"
                                                ></div>
                                            </nav>
                                        </div>
`;

// 윗쪽 슬라이드 배너의 애니메이션 기타등등.
// 시간 지나면 자동으로 옆 페이지로 넘어가고 마지막 이미지 담엔 첫 이미지.
// 왼쪽에는 2/4처럼 현재 몇 페이지인지를 실시간으로 띄워놓고 왼오 버튼을 누르면 이동시키기 (광클방지).

// 수업에서 배운대로 이미지를 추가해서 같은 이미지로 transform 시키면 댐

banner.appendChild(firstBanner);
banner.prepend(lastBanner);

// 배너를 추가했으니까 기본 1번을 보게 하려면 이미지 하나만큼 밀어야함
banner.style.transform = `translate(-766px)`;

const autoSlide = () => {
    count++;
    banner.style.transform = `translate(-${766 * count}px)`;
    banner.style.transition = `transform 0.5s ease`;

    // 마지막 페이지라면 처음으로 이동시키기
    if (count === 5) {
        setTimeout(() => {
            banner.style.transform = `translate(-766px)`;
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }
    swiperPage.innerHTML = `<strong>${count}</strong> / 4`;
};

let autoSlideInterval = setInterval(autoSlide, 4000);

let arrowCheck = true;

// 왼쪽 화살표 버튼 클릭 이벤트
leftArrow.addEventListener("click", () => {
    if (!arrowCheck) return;
    arrowCheck = false;
    clearInterval(autoSlideInterval);

    count--;
    banner.style.transform = `translate(-${766 * count}px)`;
    banner.style.transition = `transform 0.5s`;

    // 처음 이미지에서 왼버튼을 누르면
    if (count === 0) {
        setTimeout(() => {
            banner.style.transform = `translate(-3064px)`; // 마지막 슬라이드로 돌아가는 설정
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 4;
    }

    swiperPage.innerHTML = `<strong>${count}</strong> / 4`;

    autoSlideInterval = setInterval(autoSlide, 4000); // 자동 슬라이드 재시작
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
    banner.style.transform = `translate(-${766 * count}px)`;
    banner.style.transition = `transform 0.5s`;

    // 마지막 이미지에서 오른버튼을 누르면
    if (count === 5) {
        setTimeout(() => {
            banner.style.transform = `translate(-766px)`; // 처음으로 돌아가는 설정
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }

    autoSlideInterval = setInterval(autoSlide, 4000); // 자동 슬라이드 재시작
    setTimeout(() => {
        arrowCheck = true;
    }, 500);
});

// 카테고리 버튼에 커서 갖다대면 전체 네비게이션 출력, 커서가 버튼과 네비게이션을 나가면 창이 꺼지게

const hoverTarget = document.querySelector(
    ".categorySelection .categoryWrapper"
);
const hiddenElement = document.querySelector(".style__ExtendedCategorySection");

hoverTarget.addEventListener("mouseenter", () => {
    hiddenElement.style.display = "flex";
});

hoverTarget.addEventListener("mouseleave", () => {
    setTimeout(() => {
        // 크아악 카테고리 버튼을 벗어나도 네비에 있으면 네비가 안 꺼지게 하고싶은데
        // if문 조건에 hiddenElement도 포함시켜볼거다
        if (
            !hoverTarget.matches(":hover") &&
            !hiddenElement.matches(":hover")
        ) {
            hiddenElement.style.display = "none";
        }
    }, 100);
});

hiddenElement.addEventListener("mouseenter", () => {
    hiddenElement.style.display = "flex";
});

hiddenElement.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (
            !hoverTarget.matches(":hover") &&
            !hiddenElement.matches(":hover")
        ) {
            hiddenElement.style.display = "none";
        }
    }, 100);
});

// early버드 상품목록 슬라이드 배너같이 만들기.
// 버튼을 누르면 왼쪽 오른쪽 가는데 페이지가 두개밖에 없고, 왼쪽이면 버튼 안의 화살표를 오른쪽이면 반대로 투명도 조정.
// count는 필요없을거 같고 적당히 화살표 지정해서 opacity 조정하면 될거같음

const earlyBanner = document.querySelector(".earlySwiperWrapper");
const earlyLeftButton = document.querySelector(".sliderNavButtonLft");
const earlyRightButton = document.querySelector(".sliderNavButtonRt");
const earlyLeftArrow = document.querySelector(".arrow1Lft");
const earlyRightArrow = document.querySelector(".arrow1Rt");

earlyRightButton.addEventListener("click", () => {
    earlyBanner.style.transform = `translate(-775px)`;
    earlyBanner.style.transition = "transform 0.5s ease";
    earlyRightArrow.style.opacity = "0.2";
    earlyLeftArrow.style.opacity = "1";
    // 비활성화 된 버튼은 커서 갖다대도 포인터 안 바뀌게
    earlyLeftButton.style.cursor = "pointer";
    earlyRightButton.style.cursor = "default";
});

earlyLeftButton.addEventListener("click", () => {
    earlyBanner.style.transform = `translate(0px)`;
    earlyBanner.style.transition = "transform 0.5s ease";
    earlyLeftArrow.style.opacity = "0.2";
    earlyRightArrow.style.opacity = "1";
    // 비활성화 된 버튼은 커서 갖다대도 포인터 안 바뀌게
    earlyRightButton.style.cursor = "pointer";
    earlyLeftButton.style.cursor = "default";
});

// 신규 프로젝트 슬라이드 배너같이 만들기.
// 버튼을 누르면 왼쪽 오른쪽 가는데 제일 왼쪽 페이지에선 왼쪽 버튼, 오른쪽 페이지에선 오른쪽 버튼이 안 보이게 해야함.
// count를 조건으로 달아서 각 버튼의 style.display를 none이나 flex로 바꾸면 될듯?

const newBanner = document.querySelector(".newSwiperWrapper");
const newLeftArrow = document.querySelector(".newNavButtonLt");
const newRightArrow = document.querySelector(".newNavButtonRt");

let newCount = 1;

const buttonVisibility = () => {
    // count의 값을 조건으로 걸고 display를 끄면 되겠지...
    // 카운트가 1이면 꺼
    newLeftArrow.style.display = newCount === 1 ? "none" : "flex";
    // 카운트가 4면 꺼
    newRightArrow.style.display = newCount === 4 ? "none" : "flex";
};

// 해보니까 상품 5개씩 옮기려면 대충 한 청크당 1175px 하면 될듯
// newBanner.style.transform = `translate(-${1175}px)`;

const moveSlider = () => {
    // 1에서 시작함
    newBanner.style.transform = `translate(-${1175 * (newCount - 1)}px)`;
    newBanner.style.transition = "transform 0.5s ease";
    buttonVisibility();
};
// count가 아니라 newCount다!
newLeftArrow.addEventListener("click", () => {
    // 1보다 크면?
    if (newCount > 1) {
        // 누르면 카운트 감소
        newCount--;
        moveSlider();
    }
});

newRightArrow.addEventListener("click", () => {
    // 4보다 작으면
    if (newCount < 4) {
        // 누르면 카운트 증가
        newCount++;
        moveSlider();
    }
});

// 초기 버튼 상태 업데이트
buttonVisibility();
