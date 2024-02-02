const promptSync = require('prompt-sync');
const prompt = promptSync();

var numero1 = parseFloat(prompt('Digite o primeiro número:'));
var numero2 = parseFloat(prompt('Digite o segundo número:'));

var soma = numero1 + numero2;
var subtracao = numero1 - numero2;
var multiplicacao = numero1 * numero2;
var divisao = numero2 !== 0 ? numero1 / numero2 : 'Erro: Divisão por zero.';

console.log('Adição:', soma);
console.log('Subtração:', subtracao);
console.log('Multiplicação:', multiplicacao);
console.log('Divisão:', divisao);