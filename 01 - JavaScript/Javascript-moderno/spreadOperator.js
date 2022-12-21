//permite unir objetos/array de forma simples

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];
const arrayIncrement = [...array1, 4];

console.log(array3);
console.log(arrayIncrement);

const nomeCarro = { name: "celta" };
const marcaCarro = { marca: "chevrolet" };
const corCarro = { cor: "branco" };

const carro = { ...nomeCarro, ...marcaCarro, ...corCarro };
console.log(carro);
