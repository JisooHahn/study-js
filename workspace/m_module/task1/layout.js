const postLayout = (() => {
    const showPosts = (posts) => {
        const wrap = document.getElementById("table");
        let text = ``;
        console.log(posts);
        posts.forEach(({ userId, title, body }) => {
            text += `
                    <tr>
                        <th>"${userId}"</th>
                        <th>"${title}"</th>
                    </tr>
                    <tr>
                        <td colspan="2">"${body}"</td>
                    </tr>
                `;
        });

        wrap.innerHTML = text;
    };

    return { showPosts: showPosts };
})();
