let number1 = 15;
let number2 = 16;

// 삼항 연산자 사용. 똑같으면 같다는 텍스트 출력
// number1 == number2
//     ? console.log(`두 수는 같습니다`)
//     : // 값이 false가 뜰 때는 더 큰 수를 알려주기 위해 안에 삼항 연산자 한 번 더 사용
//       // number1이 2보다 크면 true니까 number1, false면 number2를 보여준다.
//       console.log(`${number1 > number2 ? number1 : number2} 가 더 큽니다.`);
// 여기서 사용한 $는 j.query

// number1이 number2보다 크냐는 값이 condition1에 넣어짐. false or true
let condition1 = number1 > number2;
// number1이 number2와 같냐고 물음. false or true
let condition2 = number1 == number2;
// 두 수가 같을 때 equalmessage 출력
let equalmessage = "두 수가 같습니다.";
let result = condition1 ? number1 : condition2 ? equalmessage : number2;
// conditon1이 true인지 false인지 먼저 물음.
// 여기서 true이면 number1이 값으로 나옴
// false일 경우에는 다음에 condition2로 number1
// 이 number2와 동일한지 true or false로 물음.
// 여기서 동일하다는게 true면 equalmessage 출력
// 동일하다는 것도 false면 number2가 number1보다 큰 것이기 때문에 number2를 출력한다.
console.log(result);
// 값이 저장공간에 들어가면 일단 let을 쓴다고 생각하자! colsole 빼곤 계속 쓰니까 자꾸 빼먹지 말고
// 대입연산자 우측이면 아무리 길어도 값이라고 생각해야한다
