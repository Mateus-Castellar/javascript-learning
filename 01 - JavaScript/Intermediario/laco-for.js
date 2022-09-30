for (let value = 1; value <= 10; value++) {
    console.log(`contando: ${value}`);
}

const frutas = ["maca", "pera", "banana", "uva", "morango"]

for (let value = 0; value < frutas.length; value++) {
    console.log(frutas[value]);
}

for (let indice in frutas) {
    console.log(frutas[indice]);
}

for (let valor of frutas) {
    console.log(valor);
}