// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1.
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) //==> Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) // ==> Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) // ==> canal: "Globo", horario: "14h"

// *********************************************************************************************

// 2.
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro) // ==> Juca 3 SRD
// console.log(gato) // ==> Juba 3 SRD
// console.log(tartaruga) // ==> Jubo 3 SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto? Copia o mesmo objeto

// *********************************************************************************************

// 3.
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) // ==> false
// console.log(minhaFuncao(pessoa, "altura")) // ==> undefined pois não foi declarada a propriedade altura

// *********************************************************************************************

// Exercícios de escrita de código

// 1. a)

// const nomeApelido = {
//     nome : "Nome",
//     apelido : ["apelidoA" , "apelidoB" , "apelidoC"],
// }

// function recebeObjeto(nomeApelido) {
//     console.log (`Eu sou ${nomeApelido.nome}, mas pode me chamar de ${nomeApelido.apelido[0]}, ${nomeApelido.apelido[1]} ou ${nomeApelido.apelido[2]} `)
    
// }
// recebeObjeto(nomeApelido)

// // *****************************************************************************************************

// // 1. b)
// const novoApelido = {
//     ...nomeApelido,
//     apelido : ["apelidoD" , "apelidoE" , "apelidoF"],
// }
// recebeObjeto(novoApelido)

// *****************************************************************************************************

// 2.

// const objeto1 = {
//     nome: "Angela",
//     idade: 45,
//     profissão: "engenheira",
// }

// const objeto2 = {
//     nome: "Arthur",
//     idade: 10,
//     profissão: "estudante",
// }

// function recebeObjeto () {
//     array = [
//         objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissão, objeto1.profissão.length,
//         objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissão, objeto2.profissão.length],
//     console.log (array)
// }
// recebeObjeto ()

//***********************************************************************************************

// 3.

// const carrinho = []

// const fruta1 = {
//     nome: "banana",
//     disponibilidade: true,
// }

// const fruta2 = {
//     nome: "maça",
//     disponibilidade: true,
// }

// const fruta3 = {
//     nome: "laranja",
//     disponibilidade: true,
// }

// function recebeFruta(fruta){
//     carrinho.push(fruta)
// }
// recebeFruta(fruta1)
// recebeFruta(fruta2)
// recebeFruta(fruta3)

// console.log (carrinho)

//********************************************************************************************************

const nome = null
const idade = null
const profissão = null

const objeto = {
    nome1: nome, idade1: idade, profissão1: profissão
}

function dadosUsuario() {
    nome = prompt("Digite seu nome"),
    idade = Number(prompt("Digite sua idade")),
    profissão = prompt("Digite sua profissão")
    }


    console.log(objeto)






//{ nome: 'Lais', profissao: "Instrutora", idade: 26}