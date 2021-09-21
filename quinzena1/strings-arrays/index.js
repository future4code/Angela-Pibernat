//EXERCICIO DE INTERPRETAÇÃO 1

// let array
// console.log('a. ', array) // a. undefined

// array = null
// console.log('b. ', array) // b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11

// let i = 0
// console.log('d. ', array[i]) // d. [3]

// array[i+1] = 19
// console.log('e. ', array) // e. [3,19,5,6,7,8,9,10,11,12,13]

// const valor = array[i+6]
// console.log('f. ', valor) // f. 9


//EXERCICIO DE INTERPRETAÇÃO 2

// const frase = prompt("Digite uma frase") // "Subi num ônibus em Marrocos"
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27


//EXERCICIO DE ESCRITA DE CÓDIGO 1

// console.log ("SEJA BEM VINDO!")
// const nomeDoUsuario = prompt("Digite seu nome")
// const emailDoUsuario = prompt("Digite seu e-mail")
// console.log (`O email ${emailDoUsuario} foi cadastrado com sucesso. Bem vindo ${nomeDoUsuario}!`)


//EXERCICIO DE ESCRITA DE CÓDIGO 2

// const comidasPreferidas = ["ovos", "frango", "brocolis", "salada", "peixe"]
// console.log (comidasPreferidas)
// console.log (`Essas são minhas comidas preferidas:
//     ${comidasPreferidas[0]}
//     ${comidasPreferidas[1]}
//     ${comidasPreferidas[2]}
//     ${comidasPreferidas[3]}    
//     ${comidasPreferidas[4]}`)
// let comidaUsuario = prompt ("Qual a sua comida preferida?")
// console.log (comidaUsuario)
// comida3 = comidasPreferidas[2]
// comida4 = comidasPreferidas[3]
// comida5 = comidasPreferidas[4]
// novasComidas = comidasPreferidas.splice(1,4)
// comidasPreferidas.push(comidaUsuario)
// comidasPreferidas.push(comida3)
// comidasPreferidas.push(comida4)
// comidasPreferidas.push(comida5)
// console.log (comidasPreferidas)


//EXERCICIO DE ESCRITA DE CÓDIGO 3

const listaDeTarefas = []
tarefa1 = prompt ("Digite sua primeira tarefa do dia")
tarefa2 = prompt ("Digite sua segunda tarefa do dia")
tarefa3 = prompt ("Digite sua terceira tarefa do dia")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log (listaDeTarefas)
tarefaRealizada = prompt("Digiite o indice de uma das tarefas já realizadas (1, 2 ou 3)")
listaDeTarefas.splice(tarefaRealizada-1,1)
console.log (listaDeTarefas)


// DESAFIO 1

// fraseUsuario = prompt("Digite uma frase");
// array = fraseUsuario.split( " " );
// console.log(array)


//DESAFIO 2

// const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// let index = array.indexOf("Abacaxi")
// console.log(index)
// console.log (array.length)