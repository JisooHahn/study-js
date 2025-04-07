const commentLayout = (() => {
    const showComments = (comments) => {
        const table = document.getElementById("comment-table");
        let text = ``;

        comments.forEach(({ name, email }) => {
            const emailClass = email.includes("biz") ? "on" : "";
            text += `
            <tr class="${emailClass}">
                <td>${name}</td>
                <td>${email}</td>
            </tr>
            `;
        });
        table.innerHTML = text;
        table.classList.add("outlined");
    };
    return { showComments: showComments };
})();
