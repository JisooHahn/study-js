// 문자열
// 문자열은 문자 나열이다. 즉 순서가 있다.

// spilt(): 전달한 구분점을 기준으로 값을 나눠준다.
// let data = "010-1234-4567";
// console.log(data.split("-"));

// 만약, 구분점이 여러 종류라면, 아래의 정규 표현식의 대괄호 안에 넣어주면 된다.
// [+-]+이나 - 둘중 하나, 대괄호 밖에 +는 "1개 이상 연속된"
// console.log("A-B+C".split(/[+-]+/));

// split은 Array객체로 리턴하기 때문에, 문자열을 Array객체로 바꿀 때에도 사용한다.
// console.log("ABC".split(""));

// 유무 검사
// includes(data): data가 문자열에 포함되었는지 검사.
// console.log("He was good boy".includes("good"));

// 문자 추출
// charAt(index): 해당 인덱스의 문자열을 추출
// console.log("ABC".charAt(0));
// console.log("ABC"[0]);
