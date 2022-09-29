console.log("usando variaveis com js");
let nome = "Mateus";//string
let idade = 19 //number
let cidade; //variavel sem inicializar, é definida como 'undefined'

console.log("meu nome é", nome, "e tenho", idade, "anos");

//com interpolação de string
console.log(`meu nome é ${nome} e tenho ${idade} anos`);

//variaveis
console.log(`variavel sem ser inicializada: ${cidade}`);
cidade = "Itapui-SP"
console.log(`variavel inicializada: ${cidade}`);

console.log("let pode alterar seu tipo de dado a qualquer momento");
teste = "sou uma variavel";
console.log(teste);
console.log(typeof (teste));
teste = false;
console.log(teste);
console.log(typeof (teste));