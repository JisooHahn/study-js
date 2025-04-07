// number1은 식별자이고 이는 변수명이다.
// let으로 선언했고 전역변수이다.
// 10이라는 값을 number1이라는 이름의 저장공간에 넣는다.
// 이 때 주소값이 생긴다.
// let number1 = 10;

// let number2 = 20;
// let number3 = "10";
// let number4 = "15";

// number1이 number4랑 같지 않다 -> 결과는 false이다.
// 이 때, 조건식 연산이 끝나면 결과는 false라는 값이기 때문에
// 이는 변수에 담을 수 있고, 조건식은 값으로 봐야한다.
// condition이라는 전역 변수에 false라는 값을 담는다.
// let condition = number1 !== number4;

// // console.log(number1 == number3);
// // console.log(number1 === number3);
// // console.log(number1 !== number2);
// // console.log(number1 < number3);
// // console.log(number2 >= number4);

// console.log(condition);
// console.log(typeof condition);

// let number1 = 10;
// let number2 = 20;

// // 조건식은 반드시 값으로 본다!
// let condition1 = number1 > 5,
//     condition2 = number2 < 10,
//     condition3 = condition1 || condition2;

// console.log(number1 > 5 && number2 < 10);
// console.log(number1 > 5 || number2 < 10);

// console.log(condition1 && condition2);
// console.log(condition3);

// // 삼항 연산자
// let number1 = 10;
// let number2 = 11;

// let result = number1 > number2 ? number1 : number2;

// // +
// // 1. 숫자끼리 사용하면 연산!
// // 2. 문자열이 포함되어 있으면 연결!
// console.log("더 큰 값: " + result);

// 두 정수를 변수에 담고,
// 삼항 연산자로 대소비교를 한다.
// 단, 두 수가 같을 때에는 알맞은 메세지를 출력한다.
let number1 = 11;
let number2 = 10;
let condition1 = number1 > number2;
let condition2 = number1 == number2;
let equalMessage = "두 수가 같습니다.";
let result = condition1 ? number1 : condition2 ? equalMessage : number2;

console.log(result);
