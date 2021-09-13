// console.log ("HELLO WORLD")

//EXERCÍCIO DE INTERPRETAÇÃO 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)   --> imprime da tela: a. false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)    --> imprime da tela: b. false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)    --> imprime na tela: c. true

// console.log("d. ", typeof resultado)     --> imprime na tela: d. boolean


//EXERCÍCIO DE INTERPRETAÇÃO 2
 //let primeiroNumero = prompt("Digite um numero!")    --> todo prompt retorna uma string
 //let segundoNumero = prompt("Digite outro numero!")  --> todo prompt retorna uma string
 
 //let soma = primeiroNumero + segundoNumero     --> não posso somar strings, elas serão concatenadas
 //console.log(soma)       --> resposta errada pelo fato das variáveis serem strigs e não números


//EXERCÍCIO DE INTERPRETAÇÃO 3
//  let primeiroNumero = prompt("Digite um numero!")    --> todo prompt retorna uma string
//  let segundoNumero = prompt("Digite outro numero!")  --> todo prompt retorna uma string
//  console.log ("Soma: ", Number(primeiroNumero) + Number(segundoNumero))  --> Resultado da soma das variáveis number


//EXERCÍCIO DE ESCRITA DE CÓDIGO 1
// let idadeUsuario = prompt ("Qual é a sua idade:")
// let idadeAmigo = prompt ("Qual a idade do seu melhor amigo?")
// console.log ("Sua idade é maior que a do seu amigo?" , Number(idadeUsuario) > Number(idadeAmigo))
// console.log ("Vocês têm" , Number(idadeUsuario) - Number(idadeAmigo) ,"anos de diferença.")


//EXERCÍCIO DE ESCRITA DE CÓDIGO 2
//let numero = prompt("Insira um número par")
//console.log ("O resto da divisão desse número por 2 é" ,(Number(numero))%2)
// ao colocar um número par o resto da divisão sempre vai ser 0
// ao colocar um número ímpar sempre teremos um resto na divisão por 2


//EXERCÍCIO DE ESCRITA DE CÓDIGO 3
// let idadeUsuario = prompt ("Qual é a sua idade:")
// console.log ("Você tem ", Number(idadeUsuario), "anos.")
// console.log ("Você tem ", (Number(idadeUsuario) * 12), "meses de vida.")
// console.log ("Você tem ", (Number(idadeUsuario)*12*365), "dias de vida.")
// console.log ("Você tem ", (Number(idadeUsuario)*12*365*24), "horas de vida.")


//EXERCÍCIO DE ESCRITA DE CÓDIGO 4
// let primeiroNumero = prompt ("Digite um número:")
// let segundoNumero = prompt ("Digite outro número:")
// console.log ("O primeiro numero é maior que segundo?", (Number(primeiroNumero))>(Number(segundoNumero)))
// console.log ("O primeiro numero é igual ao segundo?", (Number(primeiroNumero))===(Number(segundoNumero)))
// console.log ("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
// console.log ("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)


// DESAFIO 1
// let fahrenheit77 = 77
// let celsius80 = 80
// console.log ("A temperatura",fahrenheit77,"°F equivale a", (fahrenheit77-32)*(5/9)+273.15,"°K")
// console.log ("A temperatura",celsius80,"°C equivale a", celsius80*(9/5)+32,"°F")
// let celsius30 = 30
// let fahrenheit = celsius30*(9/5)+32
// console.log ("A temperatura",celsius30,"°C equivale a", celsius30*(9/5)+32,"°F")
// console.log ("A temperatura",celsius30,"°C equivale a", (fahrenheit-32)*(5/9)+273.15,"°K")
//  let celsiusUsuario = prompt("Digite a temperatura em °C")
//  console.log ("A temperatura digitada em °C equivale a", (Number(celsiusUsuario))*(9/5)+32,"°F")
//  console.log ("A temperatura digitada em °C equivale a", (Number(celsiusUsuario))*(9/5)*(5/9)+273.15,"°K")


// DESAFIO 2
//  const kWh = 0.05
//  let consumo = prompt('Informe seu consumo mensal:')
//  console.log ("Uma residência que consome", consumo,"KWh paga R$", Number(kWh)*consumo,".00")
//  let desconto = prompt("Informe o percentual de desconto desejado:")
//  console.log ("Com o desconto informado essa residência irá pagar", (Number(kWh)*consumo)-(Number(kWh)*consumo)*(Number(desconto))/100)


// DESAFIO 3a
// console.log ("CONVERSÃO DE LIBRAS(lb) PARA QUILOS(Kg)")
// let fatorDeConversao = 2.2046
// let lbEx = 20
// console.log ("Por exemplo, 20lb correspondem a", lbEx*fatorDeConversao,"Kg")
// let Lb = prompt("Digite um valor em Lb para converter para Kg:")
// console.log (Lb,"lb equivalem a", Number(Lb)*fatorDeConversao,"Kg")


// DESAFIO 3b
// console.log ("CONVERSÃO DE ONÇAS(oz) PARA QUILOS(Kg)")
// let fatorDeConversao = 35.274
// let ozEx = 10.5
// console.log ("Por exemplo, 10.5oz correspondem a", ozEx/fatorDeConversao,"Kg")
// let oz = prompt("Digite um valor em oz para converter para Kg:")
// console.log (oz,"oz equivalem a", Number(oz)/fatorDeConversao,"Kg")


// DESAFIO 3c
// console.log ("CONVERSÃO DE MILHAS(mi) PARA METROS(m)")
// let fatorDeConversao = 0.00062137
// let mi = prompt("Digite um valor em mi para converter para m:")
// console.log (mi,"mi equivalem a", Number(mi)/fatorDeConversao,"m")


// DESAFIO 3f
// console.log ("CONVERSÃO DE XICARAS(xic) PARA LITROS(Lt)")
// let fatorDeConversao = 5
// let xicEx = 450
// console.log ("Por exemplo", xicEx,"xic correspondem a", xicEx/fatorDeConversao,"Lt")
// let xic = prompt("Digite um valor em xic para converter para Lt:")
// console.log (xic,"xic equivalem a", Number(xic)/fatorDeConversao,"Lt")


// DESAFIO 3g
// console.log ("CONVERSÃO DE XICARAS(xic) PARA LITROS(Lt)")
// let fatorDeConversao = 5
// let xicEx = 450
// console.log ("Por exemplo", xicEx,"xic correspondem a", xicEx/fatorDeConversao,"Lt")
// let xic = prompt("Digite um valor em xic para converter para Lt:")







