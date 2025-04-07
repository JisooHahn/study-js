// 비어있는 객체를 선언하고 원하는 프로퍼티를
// 직접 추가할 수 있어야 한다.
// const lunch = {};

// 기존에 없는 프로퍼티는 새롭게 추가된다.
// lunch.name = "김밥";
// lunch.price = 3000;

// 기존에 있는 프로퍼티는 수정된다.
// lunch.price = 2500;
// lunch.id = 1;

// 기존에 있던 프로퍼티는 삭제된다.
// delete lunch.id;

// 모든 프로퍼티를 조회한다.
// console.log(lunch);

const lunch = {};
// const lunch = new Object();

lunch.name = "김밥";
lunch.price = 3000;
// 주소값을 전달받으면,
lunch.pay = (user) => {
    // 해당 주소는 중복이 없기 때문에,
    // 리턴 없이도 원본 객체의 프로퍼티에 접근하여 값을 수정할 수 있다.
    user.money -= lunch.price;
};

const user = {};

user.name = "홍길동";
user.money = 10000;

// 주소를 전달했기 때문에 리턴 없이도 원본 값이 수정되었다.
lunch.pay(user);

// pay 메소드에서 수정된 결과가 반영된다.
console.log(user.money);
