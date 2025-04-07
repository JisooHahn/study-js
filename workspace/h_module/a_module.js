// 모듈화
// 하나로 합쳐져 있던 코드들을 작은 단위로 분리하여
// 유지보수와 업데이트를 조금 더 편하고 쉽게 하기 위한 작업이다.
// 1개의 함수는 무조건 1개의 목적성만 가진다.

// 선언과 동시에 사용
// (function(){})()
                                                                              
// const getNumbers = (function () {

//     // 서비스1
//     function getOne() {
//         return 1;
//     }

//     // 서비스2
//     function getTwo() {
//         return 2;
//     }

//     // 구현된 전체 서비스를 객체로 리턴
// return {
//     getOne: getOne,
//     getTwo: getTwo
// };

// });

// 서버와 통신(CRUD)
const postService = (() => {
    const write = (post) => {

    };
    const getList = (page = 1, callback) => {
        const posts = [];

        if (callback) {
            callback(posts);
        }
    };
    const getPost = (id, callback) => {
        const post = {};
        if(callback) {
            callback(post);
        }
    };
    const update = (post) => {

    };
    const remove = (id) => {
        
    };
    return { 
        write: write, 
        getList: getList, 
        getPost: getPost, 
        update: update, 
        remove: remove
    };
})()




