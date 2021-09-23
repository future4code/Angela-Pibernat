// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1.
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? O código testa se o número é par.

// b) Para que tipos de números ele imprime no console "Passou no teste"? Ele imprime número pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"? Números ímpares.

//***********************************************************************************************

//2.
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//    break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima? Para informar o preço da fruta escolhida.

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta maçã é R$ 2.25

//c) Considere que um usuário queira comprar uma Pêra, 
//qual seria a mensagem impressa no console se retirássemos 
//o break que está logo acima do default 

//***************************************************************************************************

//3. 
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
//  }

// console.log(mensagem)

//a) O que a primeira linha está fazendo? A variável numero está recebendo um número do usuário.

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? Esse número passou no teste
//E se fosse o número -10? nenhuma mensagem pois não tem opção se o if for false.

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. Sim, haverá o erro 
//da tentativa de imprimir a "mensagem" pois essa variável não foi declarada no escopo global.

//**********************************************************************************************************

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.

// const idadeUsuario = Number(prompt("Digite sua idade"))

// if (idadeUsuario>=18){
//     console.log ("Você pode dirigir")
// }else{
//     console.log ("Você não pode dirigir")
// }

//***************************************************************************************** */
//2.

// const turnoDeEstudo = prompt("Digite qual seu turno de estudo: digitar M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turnoDeEstudo === "M"){
//     console.log ("Bom dia!")
// }else if (turnoDeEstudo === "V")
//     console.log ("Boa tarde!")
// else{ 
//     console.log ("Boa noite!")
// }

//3.

// let turnoDeEstudo = prompt("Digite qual seu turno de estudo: digitar M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch (turnoDeEstudo){
//     case 'M':
//     console.log ("Bom dia!")   
//         break;
//      case "V":
//     console.log ("Boa tarde!")   
//          break;
//     default:
//     console.log ("Boa noite!")
//         break;
// }

//*********************************************************************************************************

//4.

// let generoDoFilme = prompt("Qual o gênero do filme")
// let preçoDoIngresso = Number(prompt("Qual o preço do ingresso?"))

// if (generoDoFilme.toLowerCase() === "fantasia" && preçoDoIngresso < 15){
//     console.log("Bom filme!")
// }else{
//     console.log ("Escolha outro filme :(")
// }


// DESAFIOS
//1.

// let generoDoFilme = prompt("Qual o gênero do filme")
// let preçoDoIngresso = Number(prompt("Qual o preço do ingresso?"))
// let lanchinho = prompt("Qual lanchinho vc vai comprar?")

// if (generoDoFilme.toLowerCase() === "fantasia" && preçoDoIngresso < 15){
//     console.log("Bom filme!")
//     console.log(`Aproveite seu ${lanchinho}`)
// }else{
//     console.log ("Escolha outro filme :(")
// }

//**************************************************************************************************

//2.

let nomeCompleto = prompt("Digite seu nome completo")
let tipoDeJogo = prompt("Digite o tipo de jogo: escolha IN para internacional e DO para doméstico")
let etapaDoJogo = prompt("Escolha a etapa do jogo: SF para semi-final; DT para decisão de terceiro lugar; e FI para final")
let categoria = Number(prompt("Escolha a categoria: 1, 2, 3 ou 4"))
let qtdDeIngressos = Number(prompt("Digite quantos ingressos vc vai querer"))
let nacionalOuInternacional = "nacional"
const tabelaDePreços = [
    1320, 880, 550, 220,
    660, 440, 330, 170,
    1980, 1320, 880, 330
]

if (etapaDoJogo === "SF" && categoria === 1){
        valorDoIngresso = tabelaDePreços[0]
        etapaDoJogo = "Semi Final" }
if (etapaDoJogo === "SF" && categoria === 2){
        valorDoIngresso = tabelaDePreços[1]
        etapaDoJogo = "Semi Final" } 
if (etapaDoJogo === "SF" && categoria === 3){
        valorDoIngresso = tabelaDePreços[2]
        etapaDoJogo = "Semi Final" }     
if (etapaDoJogo === "SF" && categoria === 4){
        valorDoIngresso = tabelaDePreços[3]
        etapaDoJogo = "Semi Final" }
if (etapaDoJogo === "DT" && categoria === 1){
        valorDoIngresso = tabelaDePreços[4]
        etapaDoJogo = "Decisão do 3º lugar" }
if (etapaDoJogo === "DT" && categoria === 2){
        valorDoIngresso = tabelaDePreços[5]
        etapaDoJogo = "Decisão do 3º lugar" } 
if (etapaDoJogo === "DT" && categoria === 3){
        valorDoIngresso = tabelaDePreços[6]
        etapaDoJogo = "Decisão do 3º lugar"}     
if (etapaDoJogo === "DT" && categoria === 4){
        valorDoIngresso = tabelaDePreços[7]
        etapaDoJogo = "Decisão do 3º lugar" }
if (etapaDoJogo === "FI" && categoria === 1){
        valorDoIngresso = tabelaDePreços[8]
        etapaDoJogo = "Final" }
if (etapaDoJogo === "FI" && categoria === 2){
        valorDoIngresso = tabelaDePreços[9]
        etapaDoJogo = "Final" } 
if (etapaDoJogo === "FI" && categoria === 3){
        valorDoIngresso = tabelaDePreços[10]
        etapaDoJogo = "Final"}     
 if (etapaDoJogo === "FI" && categoria === 4){
        valorDoIngresso = tabelaDePreços[11]
        etapaDoJogo = "Final" }

switch (tipoDeJogo){
        case "IN":
        valorDoIngresso = valorDoIngresso*0.2439
        nacionalOuInternacional = "internacional"
        break
    }

valorTotal = qtdDeIngressos * valorDoIngresso

ingressoNacional = 
`Nome: ${nomeCompleto}\n
Tipo de jogo: ${nacionalOuInternacional}\n
Etapa do jogo: ${etapaDoJogo}\n
Categoria: ${categoria}\n
Quantidade de ingressos: ${qtdDeIngressos}\n
Valor do ingresso: R$ ${valorDoIngresso}\n
Valor total: R$ ${valorTotal}`

ingressoInternacional = 
`Nome: ${nomeCompleto}\n
Tipo de jogo: ${nacionalOuInternacional}\n
Etapa do jogo: ${etapaDoJogo}\n
Categoria: ${categoria}\n
Quantidade de ingressos: ${qtdDeIngressos}\n
Valor do ingresso: U$ ${valorDoIngresso}\n
Valor total: U$ ${valorTotal}`

if (tipoDeJogo === "DO"){
    console.log (ingressoNacional)
}else{
    console.log (ingressoInternacional)
}



