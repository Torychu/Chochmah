const age = parseInt(prompt("How old are you?"));

// parseInt("15");
//string을 int로 변환해줌

// console.log(isNaN(age));
//isNan은 boolean을 반환함
//age가 NaN(Not a Nomber)이 아니면 false가 나옴
//age가 NaN이면 true가 나옴

if (isNaN(age) || age < 0) {
  //이렇게 작성할 경우 isNaN을 통해 조건문이 true와 false로 반환되므로 if문의 실행여부를 결정할 수 있음
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("Yon can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
