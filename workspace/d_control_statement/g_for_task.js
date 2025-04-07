// 복문은 항상 몇 번 반복인지부터 확인한다.
// 나중을 위해서 i의 초기값은 0으로 설정한다.
// 어렵다면 i의 초기값을 원하는 값으로 설정한다.

// 1 ~ 100까지 출력
for (let i = 0; i < 100; i++) {
    console.log(i + 1);
}

// 100 ~ 1까지 출력
for (let i = 0; i < 100; i++) {
    console.log(100 - i);
}

// 1 ~ 100까지 중 짝수만 출력
for (let i = 0; i < 50; i++) {
    console.log((i + 1) * 2);
}

// 1 ~ 10까지 총 합 출력
let total = 0;
for (let i = 0; i < 10; i++) {
    // total = total + i + 1;
    total += i + 1;
    // total = 0 + 1
    // total = (0 + 1) + 2
    // total = (0 + 1 + 2) + 3
}
console.log(total);

// 0 1 2 0 1 2 0 1 2 출력
for (let i = 0; i < 9; i++) {
    console.log(i % 3);
}

// 1 ~ 5까지 중 2 제외하고 출력
for (let i = 0; i < 4; i++) {
    console.log(i > 0 ? i + 2 : i + 1);
}
