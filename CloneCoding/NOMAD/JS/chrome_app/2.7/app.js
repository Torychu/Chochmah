//값을 받아와 출력하기

// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

//간단한 계산

// function plus(a, b) {
//   console.log(a + b);
// }

// function divide(a, b) {
//   console.log(a / b);
// }

// plus(8, 60);
// divide(98, 20);

const player = {
  name: "nico",
  sayHello: function (otherPersonName) {
    console.log("hello " + otherPersonName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");
