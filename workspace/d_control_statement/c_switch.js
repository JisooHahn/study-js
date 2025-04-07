const MESSAGE = `당신의 혈액형은?
1. A
2. B
3. O
4. AB`;

const A_MESSAGE = "꼼꼼하고 세심하다.";
const B_MESSAGE = "추진력이 좋다.";
const O_MESSAGE = "사교성이 좋다.";
const AB_MESSAGE = "착하다.";
const ERROR_MESSAGE = "다시 시도해주세요.";

console.log(MESSAGE);

let choice = 1;
let resultMessage = null;

// if else보다 간결하게 사용할 수 있다.
switch (choice) {
    case 1:
        resultMessage = A_MESSAGE;
        // break를 case마다 써주지 않으면 조건이 성립되고도 switch문이 종료되지 않는다.
        break;
    case 2:
        resultMessage = B_MESSAGE;
        break;
    case 3:
        resultMessage = O_MESSAGE;
        break;
    case 4:
        resultMessage = AB_MESSAGE;
        break;
    // 일치하는 값이 없을 경우 실행되는 코드(선택사항)
    default:
        resultMessage + ERROR_MESSAGE;
        break;
}

console.log(resultMessage);
