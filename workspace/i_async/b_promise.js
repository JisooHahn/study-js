// 대기, 이행, 거절
const promise = new Promise((resolve, reject) => {
    let check = true;
    if (check) {
        resolve(JSON.stringify({ name: "한동석", email: "test@gmail.com" }));
    } else {
        reject("실패!");
    }
});

// promise.then((user) => { console.log(JSON.parse(user)) }).catch(console.log);

// 비동기보다 동기가 먼저 처리되기 때문에
// 소스코드 상에서의 처리 순서는 관련이 없다.
// let user = null;
// promise.then((data) => { user = data });
// console.log(user);