const commentLayout = (() => {
    const showComments = (comments) => {
        const table = document.getElementById("comment-table");
        let text = ``;

        comments.forEach(({ name, email, body, postId }) => {
            const emailClass = postId === 2 ? "red" : "";
            text += `
            <tr>
                <td>${name}</td>
                <td class="${emailClass}">${email}</td>
            </tr>
            <tr>
                <td colspan="2">${body}</td>
            </tr>
            `;
        });
        table.innerHTML = text;
        table.classList.add("outlined");
    };
    return { showComments: showComments };
})();
