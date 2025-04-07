const userService = (() => {
    const getUsers = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        if (callback) {
            callback(users.slice(0, 10));
        }
    };
    return { getUsers: getUsers };
})();
