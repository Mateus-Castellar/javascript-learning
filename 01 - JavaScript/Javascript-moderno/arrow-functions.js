const sum = function sum(a, b) {
  return a + b;
};

console.log(sum(5, 5));

//arrow
const arrowSum = (a, b) => {
  return a + b;
};

const arrowBasic = (a, b) => a + b;
const displayHello = () => console.log("olá, como vai?");

console.log(arrowSum(10, 10));
console.log(arrowBasic(10, 10));
