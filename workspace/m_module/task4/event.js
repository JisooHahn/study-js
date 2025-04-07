const button = document.getElementById("get-table");
const table = document.getElementById("user-table");

button.addEventListener("click", (e) => {
    if (table.style.display === "none" || table.style.display === "") {
        userService.getUsers(userLayout.showUsers);
        table.style.display = "table";
    } else {
        table.style.display = "none";
    }
});
