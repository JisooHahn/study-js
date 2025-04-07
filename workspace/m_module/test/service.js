const photoService = (() => {
    const getPhotos = async (page = 1, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
        );
        const photos = await response.json();

        const rowSize = 10;

        const end = page * rowSize;
        const start = end - rowSize;

        if (callback) {
            callback(photos.slice(start, end));
        }
    };

    return { getPhotos: getPhotos };
})();
