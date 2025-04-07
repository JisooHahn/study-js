const button = document.getElementById("get-table");

button.addEventListener("click", (e) => {
    const data = e.target.value;
    const table = document.getElementById("table");
    postService.getPosts(1, postLayout.showPosts);
    if (data.value === 0) {
        table[1].className += "green";
    }
});
