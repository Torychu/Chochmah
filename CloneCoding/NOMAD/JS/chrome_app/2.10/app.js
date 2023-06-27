const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerof: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(1, 2);
calculator.minus(2, 1);
calculator.divide(4, 2);
calculator.powerof(2, 2);
