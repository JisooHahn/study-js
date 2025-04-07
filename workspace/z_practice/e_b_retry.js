// function add(number1, number2){
//     return number1 + number2;
// }

// console.log(add(10, 5));

// // plus를 사용하면 add랑 똑같은 주소값이 된다.
// let plus = add;
// console.log(plus(10, 5));

// 익명함수의 특징
// 이름이 없다, 일회용, 함수 표현식(값으로 사용되는 함수)

// function 대신 => 기호를 사용한다
// 기능은 동일하다
// const add = (number1, number2) => {
//     return number1 + number2;
// }

// console.log(add(10, 5));

// const printInfo = (age, address, name = "익명") => {
//     console.log(age, address, name);
// // 얘만 중괄호 뒤에 ; 필요
// };

// 얘와 기능은 동일
// function printInfo(age, address, name = "익명") {
//     console.log(age, address, name);
// }

// printInfo(15, "경기");

// 두 정수를 전달받고 두 수를 곱한다.
// 이 때, 만약 apply라는 매개변수가 true라면 결과값에서 10을 뺀다.
// apply는 기본값이 false이다.

const multiply = (number1, number2, apply = false) => {
    // apply의 값이 true니까 따로 true를 쓰지 않아도 된다
    // return number1 * number2 - (apply ? 10 : 0);
    return number1 * number2 - (apply && 10);
};

console.log(multiply(10, 5, true));