const button = document.getElementById("get-photos");

button.addEventListener("click", (e) => {
    photoService.getPhotos(1, photoLayout.showPhotos);
});
