const albumLayout = (() => {
    const showAlbums = (albums) => {
        const table = document.getElementById("album-table");
        let text = ``;

        albums
            .filter(album => album.userId === 1)
            .forEach(({userId, title}) => {
            text += `
            <tr ${title.includes("le") && "class='on'"}>
                <td>${userId}</td>
                <td>${title}</td>
            </tr>
            `;
        });
        table.innerHTML = text;
    };
    return { showAlbums: showAlbums };
})();
