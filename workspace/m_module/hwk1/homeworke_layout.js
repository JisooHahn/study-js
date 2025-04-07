const toDoLayout = (() => {
    const showTodos = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;

        todos.forEach(({ userId, title, completed }) => {
            text += `
                <tr class="${completed ? "on" : ""}">
                    <td class="${
                        completed ? "complete" : "cancel"
                    }">${userId}</td>
                    <td class="${
                        completed ? "complete" : "cancel"
                    }">${title}</td>
                    <td class="${
                        completed ? "complete" : "cancel"
                    }">${completed}</td>
                </tr>
            `;
        });

        table.innerHTML = text;
    };

    return { showTodos: showTodos };
})();
