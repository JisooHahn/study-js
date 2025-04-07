const button = document.getElementById("get-table");

button.addEventListener("click", () => {
    commentService.getComments(commentLayout.showComments);
});
