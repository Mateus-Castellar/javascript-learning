const numbers = [1, 2, 3, 4, 5];
const highNumbers = numbers.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "mateus", availble: true },
  { name: "maria", availble: false },
  { name: "julia", availble: true },
  { name: "marcos", availble: false },
];

const avaliableUsers = users.filter((user) => user.availble);
const notAvaliableUsers = users.filter((user) => !user.availble);
console.log(avaliableUsers);
console.log(notAvaliableUsers);
