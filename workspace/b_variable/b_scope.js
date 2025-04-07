// 지역 변수와 전역 변수
// 지역 변수: 중괄호 영역 안에 선언된 변수
// 전역 변수: 어떠한 영역에도 갇혀있지 않고 선언된 별수(중괄호 밖에 선언된 변수)

// for (let i = 0; i < 10; i = i + 1) {}
// // let은 모든 중괄호를 영역으로 판단하기 때문에,
// // 닫는 중괄호를 만나면 더이상 해당 변수를 사용할 수 없다.
// console.log(i); // 오류 발생(i는 메모리에서 해제되었음.)

// for (var i = 0; i < 10; i = i + 1) {}
// // var는 함수의 중괄호만 영역으로 판단하기 때문에,
// // 위에 있는 중괄호는 영역으로 판단하지 않는다.
// // 따라서 i는 전역 변수이고 for문의 닫는 중괄호를 만나도
// // 메모리에서 해제되지 않는다.
// console.log(i); // 정상 작동

// function f() {
//     // 아무리 var일지라도 함수의 중괄호는 영역으로 판단하기 때문에
//     // 이는 지역 변수이다.
//     var data = 10;
// }

// f();
// console.log(data); // 오류 발생(f 함수의 닫는 중괄호를 만나서 메모리에서 해제됨).

// let: 모든 영역
// var: 함수 영역

// global variable(전역 변수)
// let x = 10;

// node.js에서 global 공간을 따로 만들어놨기 때문에,
// 이름이 중복되는 것을 방지하고자 global 안에 전역 변수를 선언하자!
// global.x = 10;

// 브라우저에서도 실행하고, Node.js로도 실행하려면,
// window와 global을 동시에 사용해야 하는 문제가 생긴다.
// 이를 해결하기 위해 globalThis를 사용한다.
// globalThis는 상황에 맞게 global 또는 window로 사용해준다.
globalThis.x = 10;

function f() {
    // local variable(지역 변수)
    let x = 20;
    // 가까운 곳부터 찾기 때문에, 지역변수로 접근한다.
    console.log(x);

    console.log(global.x);
}

console.log(10);
