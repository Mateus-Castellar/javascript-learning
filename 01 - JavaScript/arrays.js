// const alunos = 'luiz, maria, mateus, julia';
const alunos = ["luiz", "maria", "mateus", "julia"];

//obter elementos do array
console.log(alunos);
console.log(alunos[2]);

//adicionar elementos no array
alunos[4] = "miguel";
alunos[5] = "ana";
console.log(alunos);
console.log(alunos.length);

//adicionar elemento no fim do array sem se preocupar com tamanho do array
alunos.push("Pedro");
console.log(alunos);

//inserir elemento no inicio, porem... ele sofre alteracao em seus indeces
alunos.unshift("fernanda");
console.log(alunos);

//remove o ultimo elemento do array
let ultimoRemovido = alunos.pop();
console.log(alunos);
console.log(`o aluno ${ultimoRemovido} foi removido`)

//remove o primeiro elemento do array
let removidoPrimeiro = alunos.shift();
console.log(alunos);
console.log(`o aluno ${removidoPrimeiro} foi removido`)
