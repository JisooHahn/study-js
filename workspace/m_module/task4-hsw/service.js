//  // 사용자 ID가 1인 앨범 목록을 필터링하여 출력하는 프로그램을 작성하세요.
// title에 le가 포함된 앨범만 필터링하여 layout.js 파일에서 테이블 형태로 출력하게 합니다.
const albumservice = (() => {
  const getalbums = async (callback) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();

    if (callback) {
      callback(albums);
    }
  };

  return { getalbums: getalbums };
})();
