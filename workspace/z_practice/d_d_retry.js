// 4개의 자물쇠가 있다.
// 각 좌물쇠는 조건식으로 이루어져있고,
// 모든 조건식이 true가 되어야 자물쇠가 열린다.
// 각 자물쇠의 조건식은 아래와 같다.

let O_MESSAGE = "잠금이 해제되었습니다."
let X_MESSAGE = "다시 시도해보세요."

// 1. 첫 번째 정수가 짝수인지
// 2. 두 번째 정수가 양수인지
// 3. 세 번째 숫자가 0이 아닌지
// 4. 네 번째 숫자가 5의 배수인지
let number1 = 2;
let number2 = 3;
let number3 = -4
let number4 = 10

let condition1 = number1 % 2 === 0;
let condition2 = number2 > 0;
let condition3 = number3 !== 0;
let condition4 = number4 % 5 === 0;

let result = (condition1 + condition2 + condition3 + condition4); 
// 정수 4개를 정해서 변수에 넣는다.

// 위의 모든 조건식이 true라면 좌물쇠가 열린다.
// switch문을 사용해서 해결한다.
// 단, 논리 연산자는 사용하지 않는다.(&&, || 금지)

switch (result) {
    case 4 :
        resultMessage = O_MESSAGE;
        break;
    
    default :
        resultMessage = X_MESSAGE;
        break;
}

console.log(resultMessage);