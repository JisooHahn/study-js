const button = document.getElementById("get-todos");

button.addEventListener("click", (e) => {
    toDoService.getToDos(toDoLayout.showTodos);
});
