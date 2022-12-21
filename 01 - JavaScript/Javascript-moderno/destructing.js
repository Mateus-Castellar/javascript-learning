const frutas = ["uva", "maçã", "melão", "melancia", "abacate"];

const [fruta1, fruta2, fruta3, fruta4, fruta5] = frutas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(fruta4);
console.log(fruta5);

const produtoDetalhes = {
  nome: "mouse",
  preco: 58.99,
  categoria: "perifericos",
  cor: "preto",
};

const { nome, preco } = produtoDetalhes;
console.log(nome);
console.log(preco);
