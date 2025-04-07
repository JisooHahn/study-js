const userLayout = (() => {
    const showUsers = (users) => {
        const table = document.getElementById("user-table");
        let text = ``;

        users.forEach(({ address, name }) => {
            text += `
            <tr ${name.includes("Leanne") && "class='on'"}>>
                <td>${address.city}</td>
                <td>${address.zipcode}</td>
            </tr>
            `;
        });
        table.innerHTML = text;
    };
    return { showUsers: showUsers };
})();
