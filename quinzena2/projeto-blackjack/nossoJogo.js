/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log ("BEM VINDO AO JOGO DE BLACKJACK!")

// if(confirm("Quer iniciar uma nova rodada?")) {
// 	let primeiraCartaUsuario = comprarCarta()
//    let segundaCartaUsuario = comprarCarta()
//    let primeiraCartaComputador = comprarCarta()
//    let segundaCartaComputador = comprarCarta()
    
//    let pontosDoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
//    let pontosDoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
    
//    console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - ${pontosDoUsuario}`)
//    console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - ${pontosDoComputador}`)
    
//    if (pontosDoUsuario > pontosDoComputador) {
//       console.log("O usuário ganhou!")
//    } else if (pontosDoComputador > pontosDoUsuario) {
//          console.log("O computador ganhou!")
//    } else if (pontosDoUsuario === pontosDoComputador) {
//          console.log("Empate!")
//    }
// } else {
// 	console.log ("O jogo acabou!")
// }
