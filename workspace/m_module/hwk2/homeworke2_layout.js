const commentLayout = (() => {
    const showComments = (comments) => {
        const table = document.querySelector("table.comments");
        let text = ``;

        comments.forEach(({ id, name, email, body }) => {
            text += `
                <tr>
                    <td>${id}</td>
                    <td class="underline">${name}</td>
                    <td>${email}</td>
                    <td class="bodycol">${body}</td>
                </tr>
            `;
        });

        table.innerHTML = text;
    };

    return { showComments: showComments };
})();
