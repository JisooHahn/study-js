// // false를 의미하는 값들
// // 0, "", null, undefined

// //두 정수의 덧셈
// // callback에 어떤 값을 쓰지 않았으면 undefined
// const add = (number1, number2, callback) => {
//     // callback은 함수, 매개변수의 주소값을 받음
//     // 매개변수를 함수로 받을 수 있다

//     // undefined니까 기본 상태는 false
//     // 값이 전달 되었을 때 사용하게 된다.
//     if(callback){
//         callback(number1 + number2);
//         //return은 함수 종료용
//         return;
//     }

//     return number1 + number2;
// };

// //여기선 result가 callback 자리에 들어가서 값을 받는다.
// add(10, 5, (result) => {
//     console.log(result);
// });


// // 1.두 정수의 곱셈

// const multiply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//         return;
//     }
//     return number1 * number2;
// }

// // multiply(5, 10, (result) => {
// //     console.log(result);
// // })

// // 함수는 값이다. 출력함수도 함수라서 callback 값으로 들갈 수 있다.
// multiply(3, 10, console.log);

// // 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// // 개수가 5개 이하라면 true 아니면 false 리턴
// const getCount = (one, total, callback) => {
//     let count = total / one;
//     if(callback){
//         // callback을 반환해야 한다
//         return callback(count);   
//     }
//     return count;
// };

// //getCount의 callback 함수로 사용됨
// const checkLessEqualThan5 = (count) => {
//     return count <= 5;
// };
// // count에 return된 count를 받다
// // let count = getCount(5000, 10000);
// // console.log(count);
// // 함수 이름만 써도 됨
// let result = getCount(5000, 10000, checkLessEqualThan5);
// let lessEqualMessage = "구매 수량이 5개 이하입니다.";
// let moreMessage = "구매 수량이 5개 초과입니다.";
// let resultMessage = result ? lessEqualMessage : moreMessage;

// console.log(resultMessage);
// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// const setStatus = (price, status, callback) => {
//     let resultMessage = `${price}원 ${status ? "결제 완료" : "결제 취소"}`;
//     if (callback){
//         callback(resultMessage);
//         return;
//     }
// }

// let result = setStatus(2000, false, console.log)

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 60점일 경우 합격, 아니면 불합격

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력

// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false