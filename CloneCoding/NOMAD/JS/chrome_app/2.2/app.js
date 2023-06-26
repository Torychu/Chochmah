// console.log(52525252);
//변수 선언
const a = 10;
const b = 2;
let myName = "nico";

//변수를 업데이트할 필요가 없다면 const
//업데이트가 필요하다면 let

//콘솔에 출력
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "nicolas";
//let을 사용한 재정의
//const를 사용할 경우 이 부분에서 에러

console.log("your new name is " + myName);

//보통의 경우 const를 기본적으로 사용하고 업데이트가 필요할때 let을 사용

//var도 존재는 하지만 쓸 필요는 없다

//대부분 const, 가끔 let, var는 절대 X
