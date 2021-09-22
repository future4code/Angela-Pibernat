// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo(altura, largura) {
  const areaDoRetangulo = Number(prompt(altura)) * Number(prompt(largura))
  console.log (areaDoRetangulo)
}

// Exercício 2
function imprimeIdade(anoAtual, anoNasc) {
  const idadeDoUsuario = Number(prompt(anoAtual)) - Number(prompt(anoNasc))
  console.log (idadeDoUsuario)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Digite seu peso em Kg"))
  const altura = Number(prompt("Digite sua altura em metros"))
  const imc = peso/(altura*altura)
  console.log (imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu email")
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  const primeiraCor = prompt("Digite sua primeira cor favorita", cor1)
  const segundaCor = prompt("Digite sua primeira cor favorita", cor2)
  const terceiraCor = prompt("Digite sua primeira cor favorita", cor3)
  console.log ([primeiraCor,segundaCor,terceiraCor])

}

// Exercício 6
function retornaStringEmMaiuscula() {
  const string = prompt("Digite um texto qualquer")
  console.log (string.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoDoEspetaculo = prompt("Quanto custa um espetáculo de teatro?")
  const custoIngressoIndividual = prompt("Quanto custa cada ingresso individual?")
  const faturamentoMinimo = custoDoEspetaculo/custoIngressoIndividual
  console.log (faturamentoMinimo)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt("Digite uma palavra")
  const string2 = prompt("Digite uma palavra")
  const resultado1 = (string1.length)
  const resultado2 = (string2.length)
  console.log (resultado1 === resultado2)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Digite uma palavra")
  const string2 = prompt("Digite uma palavra")
  const tudoMaiusculo1 = string1.toUpperCase()
  const tudoMaiusculo2 = string2.toUpperCase()
  console.log(tudoMaiusculo1 === tudoMaiusculo2)
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual =Number(prompt("Digite o ano atual"))
  const dataNascimento =Number(prompt("Digite o ano do seu nascimento"))
  const emissaoRG =Number(prompt("Digite o ano de emissão do seu RG"))

  const resultadoIdade = anoAtual-dataNascimento
  const resultadoRG = anoAtual-emissaoRG
 
console.log((resultadoIdade <= 20 && resultadoRG >= 5 ) || ((resultadoIdade > 20 && resultadoIdade < 50) && resultadoRG >= 10) || (resultadoIdade >= 50 && resultadoRG >= 15))
}

// Exercício 11
function checaAnoBissexto() {
  const ano = Number(prompt("Digite um ano para análise"))
  const mult4 = ano%4 === 0
  const mult100 = ano%100 === 0
  const mult400 = ano%400 === 0

  console.log (mult400 === mult4 === mult100)
 }

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const checkIdade = idade === "sim" 
  const checkEscolaridade = escolaridade === "sim"
  const checkHorario = horario === "sim"
  console.log(checkIdade === checkEscolaridade === checkHorario)
}