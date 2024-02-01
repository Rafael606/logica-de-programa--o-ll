//declaração de função

// function primeiraFuncao(){
//     console.log('minha primeira função')
// }
// primeiraFuncao();

// function segundaFuncao(n1,n2){
//  //let: é declara algo
//       let soma=n1+n2
//       console.log(`o resultado da soma é: ${soma}`) 
// }
// segundaFuncao(20,50);

// function nomeCompleto(nome,sobrenome){
    
//     return console.log(`${nome} ${sobrenome}`)
//     console.log(`meu nome completo é: ${nome} ${sobrenome}`)

// }
//    nomeCompleto('rafael','campos');

function maiorDeIdade(idade){
       
       if (idade>=18) {
        return true;}
        else {(idade<18)}
        return false
}

let verificacao = maiorDeIdade(17);
console.log(verificacao);

if (verificacao){
    console.log('é maior de idade')
}else{
    console.log('é menor de idade')
}


   


