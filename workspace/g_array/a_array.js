// 어떤 값을 넣을지 알때
// const datas = [10, 4, 20, 3, 2];

// 값 추가
// push(): 가장 마지막에 값 추가
// datas.push(3);
// console.log(datas);

// 값 연결
// join(): 전달한 값으로 각 요소를 구분하여 모두 연결해준다.
// console.log(datas.join(","));

// 값 추출
// slice(begin, end): 원하는 부분을 추출하기 위해 시작, 끝 인덱스를 전달한다.
// console.log(datas.slice(0, 3));

// slice(begin): 전달한 시작부터 마지막 인덱스까지 추출한다.
// console.log(datas.slice(1));
// console.log(datas);

// 값 삭제(원본 수정), 삭제된 값을 리턴
// splice(index, count): index부터 count개 삭제, 삭제된 값을 Array객체로 리턴
// console.log(datas);
// console.log(datas.splice(2, 2));
// console.log(datas);

// splice(index, count, ...args): 교체
// console.log(datas.splice(2, 2, 100, 200));
// console.log(datas);

// 가변인자
// ...numbers 함수 호출 시 전달된 1,2,3을 받아옴
const getTotal = (...numbers) => {
    let total = 0;
    // numbers.length - 1,2,3 = 3이다
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};

console.log(getTotal(1, 2, 3));

// pop(): 마지막 요소 삭제
// let result = datas.pop();
// console.log(result);
// console.log(datas);

// shift(): 첫 번째 요소 삭제
// const result = datas.shift();
// console.log(result);
// console.log(datas);

// 값 검색
// indexOf(value): value를 해당 Array객체에서 좌에서 우로 찾은 뒤 인덱스 번호 리턴.
// lastIndexOf(value): value를 해당 Array객체에서 우에서 좌로 찾은 뒤 인덱스 번호 리턴.
// console.log(datas.indexOf(10));
// console.log(datas.indexOf(100));

// console.log(datas.lastIndexOf(10));
// console.log(datas.lastIndexOf(100));

// 몇 칸인지도 모르고, 무슨 값이 들어갈지도 모를 때
// const datas = [];

// 몇 칸인지는 아는데, 무슨 값이 들어갈지 모를 때
// const datas = new Array(10).fill(0);
// console.log(datas);

// 반복
// const datas = [10, 4, 20, 3, 2];

// 각 값을 순서대로 of 앞의 변수에 담아준다.
// for (let data of datas) {
//     console.log(data);
// }

// 각 인덱스를 순서대로 in 앞의 변수에 담아준다.
// for (let i in datas) {
//     console.log(i);
// }

// array.forEach((data, index, array) => {});
// 접근한 array객체로부터 각 요소를 data에 담고
// 각 인덱스를 index에 담는다.
// 접근한 array객체를 array에 담는다.

// const datas = [10, 4, 20, 3, 2];

// for이랑 동일한 값 나옴
// datas.forEach((data, i) => {
//     console.log(`${i + 1}번째 값: ${data}`);
// });

// 2 ~ 10까지 2의 배수로 Array객체에 담기
// const datas = new Array(5).fill(0);

// datas.forEach((data, i, datas) => {
//     datas[i] = (i + 1) * 2;
// });

// console.log(datas);

// 1 ~ 10까지 담은 후 각 값의 제곱을 출력한다.
// const datas = new Array(10).fill(0);

// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// datas.forEach((data) => {
//     console.log(data * data);
// });

// map((data, index, array) => {});
// 기존 값을 전달한 callback 함수의 리턴값으로 변경
// let datas = new Array(10, 6, 4, 8, 2);

// map은 요소를 콜백 함수에 따라 변환
// datas = datas.map((data) => data - 1);
// console.log(datas);

// 기존 값을 두 배 증가시키기
// let datas = new Array(3, 6, 2, 7, 8);
// datas = datas.map((data) => data * 2);
// console.log(datas);

// filter((data, index, array) => {});
// callback 함수의 리턴값이 true인 것만 추출
// let datas = new Array(10).fill(0).map((_, i) => i + 1);
// datas = datas.filter((data) => data > 4);
// console.log(datas);

// 1 ~ 100까지 담고 4의 배수만 추출
// let datas = new Array(100).fill(0).map((_, i) => i + 1);
// datas = datas.filter((data) => data % 4 == 0);
// console.log(datas);
