const button = document.getElementById("get-posts");

button.addEventListener("click", (e) => {
    postService.getPosts(postLayout.showPosts);
});
