// 게시글 정보를 전달받은 후,
// 게시글 조회를 모듈화하여 사용한다.
// 게시글 조회시, 회원의 번호를 전달받아서 그 작성자의 게시글만 가져온다.
// 전체 정보를 출력한다.
// const postService = (() => {
//     const getPosts = async (userId, callback) => {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const posts = await response.json();

//         if (callback) {
//             return callback(userId, posts);
//         }
//     }

//     return {
//         getPosts: getPosts
//     };
// })();

// const getMyPosts = (userId, posts) => {
//     return posts.filter((post) => post.userId === userId);
// }

// const printMyPosts = async () => {
//     const myPosts = await postService.getPosts(4, getMyPosts);
//     console.log(myPosts);
// }

// printMyPosts();

// 앨범 정보를 전달받은 후,
// 회원 번호가 5인 정보를 모두 가져온다.
// 그 중 userId와 title만 출력한다.
const albumService = (() => {
    const getAlbums = async (userId, callback) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const albums = await response.json();

        if (callback) {
            return callback(userId, albums);
        }
    };

    return {
        getAlbums: getAlbums
    };

})();

const getMyAlbums = (userId, albums) => {
    return albums.filter((album) => album.userId === userId);
};

const printMyAlbums = async () => {
    const myAlbums = await albumService.getAlbums(5, getMyAlbums);
    myAlbums.forEach(({ userId, title }) => {
        console.log(userId, title);
    })
}

printMyAlbums();