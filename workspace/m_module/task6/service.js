const albumService = (() => {
    const getAlbums = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/albums"
        );
        const albums = await response.json();

        if (callback) {
            callback(albums);
        }
    };
    return { getAlbums: getAlbums };
})();
