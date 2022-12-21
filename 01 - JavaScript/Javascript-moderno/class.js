class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  produtoComDesconto(desconto) {
    return this.preco - desconto;
  }
}

const teste = new Produto("teclado", 300);

console.log(teste);
const numberValues = [0];
console.log(teste.produtoComDesconto(40));

class AtributosProduto extends Produto {
  constructor(nome, preco, largura, altura, peso) {
    super(nome, preco);
    this.largura = largura;
    this.altura = altura;
    this.peso = peso;
  }
}

const produto = new AtributosProduto("mousepad", 30.0, 1, 1, 0.3);
console.log(produto);
