console.log("break e continue funcionam dentro de qualquer laço");

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    if (numero === 2) {
        console.log("pulei o número dois");
        continue;
    }

    console.log(numero);

    if (numero == 9) {
        console.log("parei por aqui");
        break;
    }
}