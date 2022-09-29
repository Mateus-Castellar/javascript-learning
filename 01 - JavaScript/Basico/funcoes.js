function retornarNome() {
    return "Mateus Castellar"
}

console.log(retornarNome());

function somarNumeros(num1, num2) {
    return num1 + num2;
}

console.log(somarNumeros(15, 35));

//arrow function =>
const nome = (nome, sobrenome) => nome + " " + sobrenome;

console.log(nome("Mateus", "Castellar"));