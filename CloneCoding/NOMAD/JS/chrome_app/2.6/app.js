const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
player.fat = false;
//const지만 이건 내부의 값을 변경하는것이므로 에러가 안남
//player 자체를 false로 바꾸려고 할 경우 에러 발생
player.lastName = "potato";
//이렇게 오브젝트를 만들어두면 그 후에 어디서든지 추가 가능
player.points = player.points + 15;
console.log(player);
