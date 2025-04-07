const button = document.getElementById("album");

button.addEventListener("click", (e) => {
  console.log("in");
  albumservice.getalbums(albumlayout.showusers);
});
// // 사용자 ID가 1인 앨범 목록을 필터링하여 출력하는 프로그램을 작성하세요.
// title에 le가 포함된 앨범만 필터링하여 layout.js 파일에서 테이블 형태로 출력하게 합니다.
