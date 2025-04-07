const button = document.getElementById("get-table");

button.addEventListener("click", () => {
    albumService.getAlbums(albumLayout.showAlbums);
});