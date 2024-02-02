const promptSync = require('prompt-sync');
const prompt = promptSync();

console.clear();
console.log('Calculadora')
console.log("Operações disponiveis: ")
console.log('1-Soma', '\n2-Subtração', '\n3-Multiplicação', '\n4-Divisão')

let cod = parseInt(prompt('Digite o código da operação desejada:'));

while (cod < 1 || cod > 4 || isNaN(cod)) {
    cod = parseInt(prompt('O código da operação desejada precisa ser um número maior que zero e menor que 4: '));
}

var x = parseFloat(prompt('Digite o primeiro número:'));
var y = parseFloat(prompt('Digite o segundo número:'));

function soma(a, b) {
    return (a + b);
}

function subtracao(a, b) {
    return (a - b);
}

function divisao(a, b) {
    return (a / b);
}

function multiplicacao(a, b) {
    return (a * b);
}

let resultado;

switch (cod) {
    case 1:
        resultado = soma(x, y)
        console.log("O resultado da soma é: ",resultado);
        break;
    case 2:
        resultado = subtracao(x, y)
        console.log("O resultado da subtração é: ",resultado);
        break;
    
     case 3:
        resultado = multiplicacao(x, y)
        console.log("O resultado da multiplicação é: ",resultado);
        break;
        
    case 4:
        resultado = divisao(x, y)
        console.log("O resultado da divisao é: ",resultado);
        break;
    
    default:
        break;
}
