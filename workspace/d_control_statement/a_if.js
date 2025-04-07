let number1 = 13;
let number2 = 13;
let condition1 = number1 > number2;
let condition2 = number1 !== number2;

let resultMessage = null;
let condition1Message = `더 큰 값: ${number1}`;
let condition2Message = `더 큰 값: ${number2}`;
let equalMessage = "두 수가 같습니다.";

// if (condition1) {
//     console.log(`더 큰 값: ${number1}`);
// }
// // 위의 조건식이 false이면서 같지 않기 때문에 number2가 더 큰 값이다.
// // 가독성이 좋지 않기 때문에 number1 < number2로 작성하는 것이 더 낫다.
// // else if (number1 !== number2) {
// else if (condition2) {
//     console.log(`더 큰 값: ${number2}`);
// } else {
//     console.log(`두 수가 같습니다.`);
// }

if (condition1) {
    resultMessage = condition1Message;
} else if (condition2) {
    resultMessage = condition2Message;
} else {
    resultMessage = equalMessage;
}

// 일괄 처리
console.log(resultMessage);
