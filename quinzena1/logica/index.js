console.log ("HELLO WORLD")

// const nomeUsuario = prompt("Digite seu nome.")
// let idadeUsuario = prompt("Digite sua idade")
// console.log ("É maior de idade?", (idadeUsuario>18)
// let idadeEm2050 = idadeUsuario + 29
// console.log ("Em 2050 o usuário terá", idadeEm2050)


// resolução do Bruno
const nomeUsuario = prompt("Digite seu nome.")
let anoNascimento = Number (prompt("Digite ano que nasceu"))
let anoAtual = Number (prompt("Em que ano estamos"))

const idadeAtual = anoAtual-anoNascimento
console.log ("É maior de idade?", (idadeAtual > 18))

console.log ("Olá", nomeUsuario)
console.log ("Você tem", idadeAtual)

let idadeEm2050 = idadeAtual + (2050 - anoAtual)
console.log ("Em 2050 o usuário terá", idadeEm2050)
