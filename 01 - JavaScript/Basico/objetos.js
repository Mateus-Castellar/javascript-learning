// const nome = "Mateus";
// const sobrenome = "Castellar";
// const idade = 19;
// const cidade = "Itapui";
// const endereco = "rua de teste ,123"

const pessoa = {
    nome: "Mateus",
    sobrenome: "Castellar",
    idade: 19,
    cidade: "Itapui",
    endereco: "rua de teste, 123",

    apresentar() {
        return console.log(`olá sou o ${this.nome}`);
    }
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.endereco);
pessoa.apresentar();