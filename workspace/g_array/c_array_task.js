// 10 ~ 1까지 Array 객체에 담은 후 짝수만 출력
// const datas = new Array(10)
//     .fill(0).map((_, i) => 10 - i)
//     .filter((data) => data % 2 == 0);

// console.log(datas);

// 1 ~ 100까지 Array객체에 담은 후 3의 배수만 추출 후 출력
// const datas = new Array(100).fill(0)
//     .map((_, i) => i + 1)
//     .filter((data) => data % 3 == 0);

// console.log(datas);

// 5개의 정수를 Array객체에 담은 후 최대값과 최소값 출력하기
// const datas = [3, 5, 6, 2, 1];
// let max = datas[0];
// let min = datas[0];

// datas.slice(1).forEach((data) => {
//     if (max < data) { max = data; }
//     if (min > data) { min = data; }
// });

// console.log(max, min);

// 한글을 숫자로 변경하여 출력
// 삼사칠구 -> 3749
// const hangul = "공일이삼사오육칠팔구";
// const input = "삼사칠구";

// // Array객체에 있는 map을 String에 그대로 구현
// String.prototype.map = Array.prototype.map;
// String.prototype.forEach = Array.prototype.forEach;

// let result = input.map((data) => hangul.indexOf(data)).join("");
// // parseInt(): 다른 문자열과 섞여있어도 정수만 추출해준다.
// // Number(): 다른 문자열이 있으면 오류
// result = parseInt(result);
// console.log(result + 9);

// 숫자를 한글로 변경하여 출력
// 3479 -> 삼사칠구
// const hangul = "공일이삼사오육칠팔구";
// let input = 3479;
// let result = "";

// while (input != 0) {
//     result = hangul[input % 10] + result;
//     input /= 10;
//     input = parseInt(input);
// }

// console.log(result);

// const hangul = "공일이삼사오육칠팔구";
// let input = "3479";
// let result = null;

// String.prototype.map = Array.prototype.map;
// String.prototype.forEach = Array.prototype.forEach;

// result = input.map((data) => hangul[data]).join("");
// console.log(result);