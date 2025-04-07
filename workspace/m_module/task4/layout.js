const userLayout = (() => {
    const showUsers = (users) => {
        const table = document.getElementById("user-table");
        let text = ``;

        users.forEach(({ email, phone, website, username }) => {
            const phoneClass = username === "Kamren" ? "hotpink" : "";
            text += `
            <tr>
                <td>${email}</td>
                <td class="${phoneClass}">${phone}</td>
                <td>${website}</td>
            </tr>
            `;
        });
        table.innerHTML = text;
        table.classList.add("outlined");
    };
    return { showUsers: showUsers };
})();
