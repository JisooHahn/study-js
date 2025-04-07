// 함수의 선언
// 프로그램 언어라서 수학의 함수와 다르다
// f(x)는 함수 호출로 이해되지만, =가 변수 할당 연산자로 처리되어 오류가 발생한다.
// f(x) = 2x + 1

// return이랑 break는 다르다!! break는 결과를 돌려주지 않으며 함수 자체에서 탈출한다
// function f(x) {
//     return 2 * x + 1;
// }

// console.log(f(3) + 9);

// 두 정수의 곱셈을 구해주는 함수
function multiply(number1, number2) {
    let result = number1 * number2;
    return result;
    // 이걸 return하면 result는 number1 * number1이 된다..
    // return number1 * number1;
}

let result = multiply(10, 2);
// result를 return하지 않으면 결과는 undefined였을 것이다.
// 괄호 바깥에 있으니까...함수 안에선 결과를 return한다고 생각하자
console.log(result);

// 두 정수의 나눗셈을 통해 결과값을 구한다.
// 단, 분모는 0이 될 수 없다.
// 만약, 분모가 0이라면 결과값은 0으로 약속한다.
// function divide(number1, number2) {
//     // if (number2 === 0) {
//     //     //return을 만나면, 함수는 즉시 종료된다.
//     //     return 0;
//     // }
//     // return number1 / number2;
//     return number2 === 0 ? 0 : number1 / number2;
// }

// let result = divide(10, 0);
// console.log(result);

// 1 ~ 10까지 출력하는 함수
// function print1To10() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i + 1);
//     }
// }

// print1To10();

// "홍길동"을 n번 출력하는 함수
// function printHong(count) {
//     let name = "홍길동";

//     for (let i = 0; i < count; i++) {
//         console.log(`${i + 1}. ${name}`);
//     }
// }

// printHong(10);

// 이름을 n번 출력하는 함수
// function printName(name, count) {
//     for (let i = 0; i < count; i++) {
//         console.log(name);
//     }
// }

// printName("김주연", 20);

// 세 정수의 뺄셈 함수
// function subtract(number1, number2, number3) {
//     let result = number1 - number2 - number3;
//     return result;
// }

// let result = subtract(1, 2, 3);
// console.log(result);

// 1 ~ n까지의 합을 구해주는 함수
// function getTotal(end) {
//     let total = 0;
//     for (let i = 0; i < end; i++) {
//         total += i + 1;
//     }

//     return total;
// }

// let total = getTotal(10);
// console.log(total);

// 홀수를 짝수로, 짝수를 홀수로 바꿔주는 함수
// function change(number) {
//     return ++number;
// }

// let result = change(11);
// let resultMessage = result % 2 == 0 ? "짝수" : "홀수";
// console.log(`${resultMessage}로 변경되었습니다.`);

// if (result % 2 == 0) {
//     console.log("짝수로 변경되었습니다.");
// } else {
//     console.log("홀수로 변경되었습니다.");
// }
