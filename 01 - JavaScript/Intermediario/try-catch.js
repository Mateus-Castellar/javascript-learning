console.log("tratando erros no JavaScript");

function soma(x, y) {
    if (typeof (x) !== Number || typeof (y) !== Number) {
        throw ("informe apenas numeros na soma");
        // throw new Error("informe apenas numeros na soma");
    }

    return x + y;
}


try {
    console.log(soma(3, 7))
}
catch (error) {
    console.log(error);
}
finally {
    //sempre executado no final de tudo
    console.log("passei no final");
}