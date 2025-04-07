// false를 의미하는 값들
// 0, "", null, undefined

// 두 정수의 덧셈
// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//         return;
//     }

//     return number1 + number2;
// };

// let result = add(1, 3);
// console.log(result);

// add(1, 3, (result) => {
//     console.log(result);
// });

// add(1, 3, console.log);

// // 1.두 정수의 곱셈
// const multiply = (number1, number2, callback) => {
//     let result = number1 * number2;

//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// // 2. 2를 곱해서 출력
// const printResult = (result) => {
//     console.log(result * 2);
// };

// // multiply(3, 5, printResult);
// let result = multiply(3, 5);
// console.log(result);

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력
// const makeFullName = (firstName, lastName, callback) => {
//     let fullName = lastName + firstName;
//     if (callback) {
//         callback(fullName);
//     }
//     return fullName;
// };

// const printFullName = (fullName) => {
//     console.log(`${fullName}님`);
// };

// let fullName = makeFullName("동석", "한", printFullName);
// console.log(`성함: ${fullName}`);

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// const getCount = (price, total, callback) => {
//     let count = total / price;

//     if (callback) {
//         return callback(count);
//     }

//     return count;
// };

// const checkLessEqaulThan5 = (count) => {
//     return count <= 5;
// };

// let count = getCount(5000, 50000);
// console.log(`구매 수량: ${count}개`);

// let result = getCount(5000, 10000, checkLessEqaulThan5);
// let lessEqualMessage = "구매 수량이 5개 이하입니다.";
// let moreMessage = "구매 수량이 5개 초과입니다.";
// let resultMessage = result ? lessEqualMessage : moreMessage;

// console.log(resultMessage);

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// const setStatus = (price, status, callback) => {
//     let resultMessage = `${price}원 ${status ? "결제 완료" : "결제 취소"}`;

//     if (callback) {
//         callback(resultMessage);
//         return;
//     }
//     return resultMessage;
// };

// // let resultMessage = setStatus(10000, false);
// // console.log(resultMessage);

// setStatus(10000, true, console.log);

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력
// const compareCowWithPig = (cowCount, pigCount, callback) => {
//     let result = cowCount > pigCount;
//     if (callback) {
//         return callback(result);
//     }

//     return result;
// };

// let message = compareCowWithPig(10, 40, (result) => {
//     return result ? "소" : "돼지";
// });

// console.log(message);

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 60점일 경우 합격, 아니면 불합격
// const getAverage = (korean, english, math, callback) => {
//     let total = korean + english + math;
//     let average = total / 3;

//     if (callback) {
//         return callback(average);
//     }

//     return average;
// };

// const checkScore = (average) => {
//     return average === 60 ? "합격" : "불합격";
// };

// let message = getAverage(30, 100, 90, checkScore);
// console.log(message);

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력
// const getTotal = (end, callback) => {
//     let total = 0;

//     for (let i = 0; i < end; i++) {
//         total += i + 1;
//     }

//     if (callback) {
//         return callback(total);
//     }

//     return total;
// };

// let result = getTotal(10, (total) => {
//     return total >= 5000 ? total - 5000 : total;
// });

// console.log(result);

// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false
// const checkEven = (start, end, callback) => {
//     let target = 0;
//     for (let i = start; i <= end; i++) {
//         if (i % 2 == 0) {
//             target = i;
//             break;
//         }
//     }

//     if (callback) {
//         return callback(target);
//     }

//     return target;
// };

// // let target = checkEven(43, 54);
// // console.log(target);

// // () => 값 : 만약, 중괄호를 생략하고 값을 작성하면, 이는 리턴값이다.
// let result = checkEven(1, 10, (target) => target >= 10);
// let greaterEqaulMessage = "10 이상입니다.";
// let lessMessage = "10 미만입니다.";
// let resultMessage = result ? greaterEqaulMessage : lessMessage;

// console.log(resultMessage);

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false
// const calculate = (number1, number2, callback1, callback2) => {
//     let subtract = number1 - number2;
//     let multiply = number1 * number2;

//     if (callback1 && callback2) {
//         return callback1(subtract) && callback2(multiply);
//     }

//     console.log(subtract, multiply);
// };

// let result = calculate(
//     5,
//     10,
//     (result) => result >= 5,
//     (result) => result >= 50
// );

// let trueMessage = "모든 조건이 통과되었습니다.";
// let falseMessage = "조건이 일치하지 않습니다.";
// let resultMessage = result ? trueMessage : falseMessage;

// console.log(resultMessage);
