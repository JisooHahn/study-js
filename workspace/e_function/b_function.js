// function add(number1, number2) {
//     return number1 + number2;
// }

// add는 작성된 코드의 주소값이다.
// 이를 plus에 담으면, 같은 주소를 가리킨다.
// let plus = add;

// 따라서 plus를 사용하면 add와 동일한 기능이 수행된다.
// console.log(plus(1, 3));

// 익명 함수
// 재사용의 목적이 아닌 일회성으로 사용한다.
// 만약 이를 재사용하고자 한다면, 원하는 이름의 변수에 담아서 함수로 사용한다.
// 이 때에는 arrow expression 문법을 사용하여 선언한다.
// (매개변수1, ...) => {
//      실행할 문장;
//      return 리턴값;
//  }
// const add = (number1, number2) => {
//     return number1 + number2;
// };

// console.log(add(1, 3));

// 기본값 설정
// const printInfo = (age, address, name = "익명") => {
//     console.log(age, address, name);
// };

// printInfo(20, "남양주");
// printInfo(20, "남양주", "한동석");

// 두 정수를 전달받고 두 수를 곱한다.
// 이 때, 만약 apply라는 매개변수가 true라면 결과값에서 10을 뺀다.
// apply는 기본값이 false이다.
// const multiply = (number1, number2, apply = false) => {
//     // return number1 * number2 - (apply ? 10 : 0);
//     return number1 * number2 - (apply && 10);
// };

// console.log(multiply(1, 2, true));
