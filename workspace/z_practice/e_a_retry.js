// 함수는 값이다!!!!

// 두 정수의 곱셈을 구해주는 함수
// function multiply(number1, number2) {
//     let result = number1 * number2;
//     // 여기서 result 반환
//     return result;
// }
// // result에 multiply의 결과를 저장           
// let result = multiply(3, 5);
// console.log(result);

// 두 정수의 나눗셈을 통해 결과값을 구한다.
// 단, 분모는 0이 될 수 없다.
// 만약, 분모가 0이라면 결과값은 0으로 약속한다.

// function divide(number1, number2){
//     let result = number1 / number2;
//     if(number2 === 0){
//         return 0;
//     }
//     return result;
// }

// 삼항도 써보자..
// function divide(number1, number2){
//     let result = number2 === 0 ? 0 : number1 / number2;
//     return result;
// }
// // result에 divide의 결과 저장
// let result = divide(15, 15);
// console.log(result);

// 1 ~ 10까지 출력하는 함수
// 매개변수가 꼭 필요한 것만은 아니다
// function print1To10(){
//     for(let i = 0; i < 10; i++) {
//         console.log(i + 1);
//     }
// }
// 함수가 정의되어 있기만 한 상태에선 동작하지 않는다. 
// 여기서 따로 함수를 한 번 더 입력해(호출) 정의한 함수가 동작한다.
// 함수를 호출할 때는 중괄호{}를 입력하지 않는다. 소괄호()는 매개변수 전달용
// print1To10();

// "홍길동"을 n번 출력하는 함수
// function printHong(n){
//     let name = "홍길동";
//     for(let i = 0; i < n; i++){
//         console.log(i + 1 + "." + name);
//     }
// }

// 소괄호()안에 있는 10은 매개변수이다. n에 10을 입력한 것.
// printHong(10);

// function printName(name, count) {
//     for(let i = 0; i < count; i++){
//         // 똑같이 적용된다!
//         console.log(`${i + 1}. ${name}`);
//     }
// }
// 여기서 소괄호 안에 name = 홍길동 count = 10을 넣었다.
// printName("홍길동", 10);

// 이름을 n번 출력하는 함수
// function printName(name, n) {
//     for(let i = 0; i < n; i++) {
//         console.log(`${i + 1}. ${name}`);
//     }
// }

// // printName("한지수", 5);
// // 세 정수의 뺄셈 함수
// function subtract(number1, number2, number3) {
//     let result = number1 - number2 - number3;
//     return result;
// }

// // subtract는 값으로 사용된거다. 이걸 혼자 생각하다니 장하구만
// // console.log(subtract(10, 3, 2));

// // subtract 안의 숫자를 넣어 계산한 값을 result에 넣는다...?
// let result = subtract(10, 3, 2);
// console.log(result);

// 1 ~ n까지의 합을 구해주는 함수
// function addition(n) {
//     let total = 0;
//     for(let i = 0; i < n; i++) {
//         total += i + 1;
//     }
//     return total;
// }

// let total = addition(10);
// console.log(total);

// 홀수를 짝수로, 짝수를 홀수로 바꿔주는 함수

function transform(number) {
    // ++을 앞에 써야만 적용된다.
    let result = ++number;
    return result;
}

let result = transform(11);
console.log(result);

if (result % 2 === 0 ) {
    console.log("짝수로 변경되었습니다.");
}
else {
    console.log("홀수로 변경되었습니다.");
}