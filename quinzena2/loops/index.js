// Exercícios de interpretação de código

// 1.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)  // o laço vai incrementar o valor da variavel valor 
                    //enquanto i for menor que 5. Depois vai imprimir 4 na tela.


// 2.a
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero) // o laço vai verificar se cada número da lista é maior do 18 e vai imprimir todos que forem. 
//                             //vai sair no console: 19, 12, 23, 25, 27, 30
// 	}
// }


// 2.b
// sim seria possível


// 3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++     // o laço vai colocar um * em cada linha, incrementando um * por linha, 
//                         //até a quantidade total de linhas digitada pelo usuário
// }


//Exercícios de escrita de código

1.

// let quantosBichosUsuarioTem = Number(prompt("Digite a quantidade de bichos que vc tem"))
// let arrayDeNomes = []
// if (quantosBichosUsuarioTem === 0){
//     console.log ("Que pena! Você pode adotar um pet!")
// }else{
//     while (quantosBichosUsuarioTem > 0){
//         nomeDoPet = prompt("Digite o nome do pet");
//         arrayDeNomes.push(nomeDoPet);
//         quantosBichosUsuarioTem-- ;
//     }
// console.log (arrayDeNomes)
// }


// 2. 
// a) Escreva um programa que **imprime** cada um dos valores do array original.

// const arrayOriginal = [10, 20, 30, 40]

// for (i = 0; i < arrayOriginal.length; i++){
//     const impressão = arrayOriginal[i]
//     console.log (impressão)
// }

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// const arrayOriginal = [10, 20, 30, 40]

// for (i = 0; i < arrayOriginal.length; i++){
//     const impressão = arrayOriginal[i]
//     console.log (impressão/10)
// }

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original 
// e **imprima** esse novo array

// const arrayOriginal = [10, 20, 30, 40]
// let novoArray = []

// for (i = 0; i < arrayOriginal.length; i++){
//     const elementoPar = arrayOriginal[i]
//         if (arrayOriginal[i]%2===0){
//         novoArray.push(elementoPar)
//     }
// }
// console.log (novoArray)


// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
// "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// const arrayOriginal = [10, 20, 30, 40]
// let arrayDeStrings = []  

// const novoArray = (arrayOriginal) => {
//     for (i = 0; i < arrayOriginal.length; i++){
//         elemento = i
//         numero = arrayOriginal[i]
//         arrayDeStrings.push(`O elemento do índex ${elemento} é: ${numero}`)
//     }
//     return arrayDeStrings
// }
// console.log (novoArray(arrayOriginal))   


// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// const arrayOriginal = [10, 20, 30, 40]

// const maiorNumero = arrayOriginal =>{
//     let maiorNumero = arrayOriginal[0]
//     for (let numeroEmAnalise of arrayOriginal)
//         if (numeroEmAnalise > maiorNumero){
//             maiorNumero = numeroEmAnalise
//         }
// return maiorNumero
// }
// console.log ("O maior número da array é:", maiorNumero(arrayOriginal))

// const menorNumero = arrayOriginal =>{
//     let menorNumero = arrayOriginal[0]
//         for (let numeroEmAnalise of arrayOriginal)
//         if (numeroEmAnalise < menorNumero){
//             menorNumero = numeroEmAnalise
//         }
// return menorNumero
// }
// console.log ("O menor número da array é:", menorNumero(arrayOriginal))
