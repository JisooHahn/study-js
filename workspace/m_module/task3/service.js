const commentService = (() => {
    const getComments = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/comments"
        );
        const comments = await response.json();

        if (callback) {
            callback(comments.slice(0, 10));
        }
    };
    return { getComments: getComments };
})();
