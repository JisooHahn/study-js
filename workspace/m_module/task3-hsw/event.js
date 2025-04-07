const button = document.getElementById("user-info");

button.addEventListener("click", (e) => {
  userservice.getusers(userlayout.showusers);
});
