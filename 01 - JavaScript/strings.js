let text = "um texto qualquer";

//pegar apenas 1 caracter da string
console.log(text[4]);
console.log(text.charAt(7));

//obtem o codigo do caracter referente a tebela ASC
console.log(text.charCodeAt(7));

//retorna indice no qual a palavra inicia/termina dentro da string
console.log(text.indexOf("qualquer"));
console.log(text.lastIndexOf("qualquer"));

//retorna caracteres que estao contidos dentro do regex
console.log(text.match(/[a-z]/g))

//substituir strings
console.log(text.replace("um", "outro"));

//recorta a string
console.log(text.slice(2, 8));