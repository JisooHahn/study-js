const usersLayout = (() => {
    const showUsers = (users) => {
        const table = document.querySelector("table.users");
        let text = ``;

        users.forEach(({ name, email, phone, website }) => {
            text += `
                <tr ${website.includes(".org") && "class='on'"}>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                </tr>

            `;
        });
        table.innerHTML = `
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Phone Number</th>
                    </tr>
            </thead>
            <tbody>
                ${text}
            </tbody>
        `;
    };
    return { showUsers: showUsers };
})();

// const usersWebsite = (() => {
//     const showWebsite = (website) => {
//         const websites = document.querySelector("table.users");
//         let text1 = ``;

//         website.forEach(({ name, email, phone, website }) => {
//             text1 += `
//                 <tr ${website.includes(".org") && "class='on'"}>
//                     <td>${website}</td>
//                 </tr>
//             `;
//         });
//         websites.innerHTML = `
//             <thead>
//                     <tr>
//                         <th>Website for checking</th>
//                     </tr>
//             </thead>
//             <tbody>
//                 ${text1}
//             </tbody>
//         `;
//     };
//     return { showWebsite: showWebsite };
// })();

const usersWebsite = (() => {
    const showWebsite = (website) => {
        const websites = document.querySelector("table.users");
        let text = ``;

        website.forEach(({ name, email, phone, website }) => {
            text += `
                <tr ${website.includes(".org") && "class='on'"}>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${website}</td>
                </tr>

            `;
        });
        websites.innerHTML = `
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Phone Number</th>
                        <th>Website</th>
                    </tr>
            </thead>
            <tbody>
                ${text}
            </tbody>
        `;
    };
    return { showWebsite: showWebsite };
})();
