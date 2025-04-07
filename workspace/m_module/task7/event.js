const button = document.getElementById("get-table");
const table = document.getElementById("user-table");
userService.getUsers(userLayout.showUsers);

let allUsers = [];
// 기본 필터상태 false
let filtered = false;

// 서버로부터 users 데이터를 가져옴
userService.getUsers((users) => {
    // 이를 allUsers에 저장
    allUsers = users;
    userLayout.showUsers(allUsers);
});

button.addEventListener("click", (e) => {
    // filtered가 꺼져있으면 전체 유저를 보여줌
    if (filtered) {
        userLayout.showUsers(allUsers);
    } else {
        // filter에 조건을 추가
        const filteredUsers = allUsers.filter(
            (user) => user.company.name === "Romaguera-Crona"
        );
        // filtered된 유저만 보여줌
        userLayout.showUsers(filteredUsers);
    }
    // filtered의 상태를 바꿔서 누를 때마다 상태가 바뀌게 함
    filtered = !filtered;
});
