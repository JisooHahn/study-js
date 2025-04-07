const user = {
    id: 1,
    email: "hds1234@naver.com",
    password: "1234"
}

console.log(user);
console.log(JSON.stringify(user));

const data = JSON.stringify(user);
const obj = JSON.parse(data);

console.log(obj.email);