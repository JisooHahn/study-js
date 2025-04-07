const todoService = (() => {
    const getTodos = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();

        if (callback) {
            callback(todos.slice(0, 20));
        }
    };
    return { getTodos: getTodos };
})();
