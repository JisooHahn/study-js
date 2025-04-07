const button = document.getElementById("get-comments");

button.addEventListener("click", (e) => {
    commentService.getComments(commentLayout.showComments);
});
