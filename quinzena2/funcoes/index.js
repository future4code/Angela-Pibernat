// Exercícios de interpretação de código

// 1. Leia o código abaixo
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//minhaFuncao(2)
//minhaFuncao(10)


// a) O que vai ser impresso no console? 10 e 50
// b) O que aconteceria se retirasse os comandos console.log e apenas invocasse a função? Não apareceria nada
// pois precisa do console.log pra mostrar

//2.Leia o código abaixo
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade: Essa função busca uma palavra qualquer (nesse caso "cenoura")
//dentro do texto digitado pelo usuário após converter esse texto para letras minúsculas.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   Eu gosto de cenoura -> true
// ii.  CENOURA é bom pra vista -> true
// iii. Cenouras crescem na terra -> true


// Exercícios de escrita de código

// 1.a)
// function imprimeIinformaçõesPessoais() {
//     console.log("Eu sou Angela, tenho 45 anos, moro em Viamão e sou estudante da Labenu.");
//   }
//   //INVOCAÇÃO/EXECUÇÃO DA FUNÇÃO
//   imprimeIinformaçõesPessoais();

  
// 1.b)

// function imprimeDadosPessoais(){
//     const NOME = prompt ("Digite seu nome")
//     const IDADE = Number(prompt ("Digite sua idade"))
//     const ENDEREÇO = prompt ("Digite sua cidade")
//     const PROFISSÃO = prompt("Digite sua profissão")
//     console.log (`Eu sou ${NOME}, tenho ${IDADE} anos, moro em ${ENDEREÇO} e sou ${PROFISSÃO}.`)
// }
//     imprimeDadosPessoais()


// 2.a)
// function somaNumeros(num1, num2){
//     const soma = num1 + num2
//     return soma
// }
// let numeroDigitado1 = Number(prompt("Digite o primeiro número"))
// let numeroDigitado2 = Number(prompt("Digite o segundo número"))
// console.log (somaNumeros(numeroDigitado1,numeroDigitado2))


// 2.b)
// function booleanNumeros(num1, num2){
//     const boolean = num1 >= num2
//     return boolean
// }
//     let numeroDigitado1 = Number(prompt("Digite o primeiro número"))
//     let numeroDigitado2 = Number(prompt("Digite o segundo número"))
//     console.log (booleanNumeros(numeroDigitado1,numeroDigitado2))

//2.c
// let numeroDigitado1 = Number(prompt("Digite um número qualquer"))

// function numeroPar(){
//     let analise = numeroDigitado1%2 === 0
//     console.log ("Esse número é par?", analise)
// }
// numeroPar(numeroDigitado1)


// 2.d
// function recebeMensagem(){
//     let texto = prompt ("Digite uma mensagem.")
//     console.log (`A mensagem "${texto.toUpperCase()}" possui ${texto.length} caracteres.`)
// }
// recebeMensagem()


3.
// function somaNumeros(num1, num2){
//     const soma = num1 + num2
//     return soma
// }

// function subtraiNumeros(num1, num2){
//     const subtração = num1 - num2
//     return subtração
// }

// function multiplicaNumeros(num1, num2){
//     const multiplica = num1 * num2
//     return multiplica
// }

// function divideNumeros(num1, num2){
//     const divisão = num1 / num2
//     return divisão
// }

// let num1 = Number(prompt("Digite o primeiro número"))
// let num2 = Number(prompt("Digite o segundo número"))

// console.log (somaNumeros(num1,num2))
// console.log (subtraiNumeros(num1,num2))
// console.log (multiplicaNumeros(num1,num2))
// console.log (divideNumeros(num1,num2))


// DESAFIOS
// a. 
// const parametroDigitado = prompt("Digite um parametro")

// const recebeParametro = (x) => {
    
//     console.log (x)
// }
// recebeParametro(parametroDigitado)

// b.
const recebeParametro = (x) => {
    console.log (x)
}

let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

const recebeDoisValores = (valor1 , valor2) =>{
const soma = valor1 + valor2
return soma
}
recebeParametro(num1, num2)
