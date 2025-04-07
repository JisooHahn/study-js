// function User(name, pw = "1234", id = 1, age = 20) {
//     this.name = name;
//     this.id = id;
//     this.pw = pw;
//     this.age = age;
// }

// const hong = new User("홍길동", "3333");
// const lee = new User("이순신", "1111");

// console.log(hong);
// console.log(lee);

// lee.isAlive = true;
// console.log(lee);

// 모든 회원은 자신의 정보를 출력하는 메소드를 가지고 있다.
// 이 형식은 약속된 것이기 때문에, 나중에 수정을 해도 모든 회원이
// 동시에 같이 변경되어야 한다.
// 즉, 공유하는 프로퍼티이다.
// User.prototype.showInfo = (user) => {
//     console.log(user.name, user.age);
// };

// User.prototype.showInfo(hong);
// User.prototype.showInfo(lee);

// 회사 객체에 직원의 정보가 있다.
// 직원의 수익이 회사의 수익에 더해져야한다.
function Company(name, income = 0) {
    this.name = name;
    this.income = income;
}

Company.prototype.income = 0;

const han = new Company("한동석");
const hong = new Company("홍길동");

han.income += 1000000;
hong.income += 300000;

Company.prototype.income += han.income;
Company.prototype.income += hong.income;

console.log(Company.prototype.income);
