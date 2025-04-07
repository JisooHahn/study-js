const button = document.getElementById("get-table");
const table = document.getElementById("table");

button.addEventListener("click", (e) => {
    commentService.getComments(commentLayout.showComments);
});
