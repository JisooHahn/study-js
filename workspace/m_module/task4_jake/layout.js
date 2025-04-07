const postLayout = (() => {
    const showPosts = (posts) => {
        const table = document.querySelector("table.posts");
        let text = ``;

        posts.forEach(({ title, body }) => {
            const fiftyTitle =
                title.length > 50 ? title.slice(0, 50) + "..." : title;
            const hundredBody =
                body.length > 100
                    ? body.slice(0, 100) + "... 내용이 길어서 생략되었습니다."
                    : body;
            text += `
                <tr ${title.length > 50 && "class='on'"}>
                    <td>${fiftyTitle}</td>
                    <td>${hundredBody}</td>
                </tr>
            `;
        });
        table.innerHTML = `
        <thead>
            <th>Title</th>
            <th>Body</th>
        </thead>
        <tbody>${text}</tbody>
        `;
    };
    return { showPosts: showPosts };
})();
