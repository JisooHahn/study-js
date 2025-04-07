const button = document.getElementById("get-users");

button.addEventListener("click", (e) => {
    userService.getUsers(usersLayout.showUsers);
    buttonWeb.style.display = "inline-block";
});

const buttonWeb = document.getElementById("get-website");

buttonWeb.addEventListener("click", (e) => {
    userService.getUsers(usersWebsite.showWebsite);
});
