alert("um simples aviso!");
const resposta = confirm("você confirma isso?, responda por favor =)");

//podemos capturar a resposta do alert;
if (resposta) {
    console.log("fui confirmado");
}
else {
    console.log("fui recusado");
}

let numero = prompt("digite um número =)");
console.log(numero, typeof (numero));

//converte a string para numero
numero = parseFloat(numero);