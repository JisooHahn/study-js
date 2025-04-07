const postService = (() => {
    const getPosts = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();

        if (callback) {
            callback(posts);
        }
    };
    return { getPosts: getPosts };
})();
