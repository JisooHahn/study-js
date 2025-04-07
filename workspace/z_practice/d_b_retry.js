// 출력 예)
// 당신의 혈액형은?
// 1. A
// 2. B
// 3. O
// 4. AB

const MESSAGE = `
당신의 혈액형은?
1. A
2. B
3. O
4. AB`;
console.log(MESSAGE);

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

const A_MESSAGE = "꼼꼼하고 세심하다.";
const B_MESSAGE = "추진력이 좋다.";
const O_MESSAGE = "사교성이 좋다.";
const AB_MESSAGE = "착하다.";
const ERROR_MESSAGE = "다시 시도하세요."

let choice = 4;

if(choice === 1){
    result = A_MESSAGE;
}
else if(choice === 2){
    result = B_MESSAGE;
}
else if(choice === 3){
    result =  O_MESSAGE;
}
else if(choice === 4){
    result = AB_MESSAGE;
}
else{
    result = ERROR_MESSAGE;
}

console.log(result);