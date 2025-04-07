// 출력 예)
// 당신의 혈액형은?
// 1. A
// 2. B
// 3. O
// 4. AB

// 선택 값 예시)
// 1
//
// 출력 예)
// 꼼꼼하고 세심하다.
//

// 사용자가 선택한 혈액형의 메세지는 다음과 같다.
// A: 꼼꼼하고 세심하다.
// B: 추진력이 좋다.
// O: 사교성이 좋다.
// AB: 착하다.

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

let choice = 3;
let result = null;

console.log(MESSAGE);

result =
    choice == 1
        ? A_MESSAGE
        : choice === 2
        ? B_MESSAGE
        : choice === 3
        ? O_MESSAGE
        : choice === 4
        ? AB_MESSAGE
        : ERROR_MESSAGE;

console.log(result);
