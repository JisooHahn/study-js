// break는 반복 중단, continue는 건너뛰기

// 1 ~ 10까지 중 4까지만 출력
for (let i = 0; i < 10; i++) {
    if (i === 4){
        break;
    }
    console.log(i + 1);
}

// 1 ~ 10까지 중 4제외하고 출력
for (let i = 0; i < 10; i++) {
    if (i + 1 === 4){
        continue;
    }
    console.log(i + 1);
}