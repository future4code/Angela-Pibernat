// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })        // a função novoArray está retornando o mesmo array usuarios indicando o indice de cada elemento do array

//*********************************************************************************************** */
  
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)      // O console vai trazer o novoArrayB apenas com 
//                                 //os nomes do array usuarios: {"Amanda Rangel","Laís Petra", "Letícia Chijo"}

//**************************************************************************************************

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
// ]
                                  
// const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
// })
                                  
// console.log(novoArrayC) // novoArrayC = [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }]
                                        
//********************************************************************************************************

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  // a) Crie um novo array que contenha apenas o nome dos doguinhos

//  const novoArrayNomes = pets.map((item, index, array) => {
//     return item.nome
// })
                                  
// console.log(novoArrayNomes)

// // b) Crie um novo array apenas com os cachorros salsicha

// const novoArraySalsicha = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
// })
                                  
// console.log(novoArraySalsicha)

// // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.\n 
// // A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const novoArrayDesconto = pets.filter((item, index, array) => {
//     if (item.raca === "Poodle"){
//         nomeDoPet = item.nome
//         console.log ("Você ganhou um cupom de desconto de 10% para tosar o/a " + nomeDoPet)
//     }
// })

//*******************************************************************************************************

2.
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
                                  

 // a) Crie um novo array que contenha apenas o nome de cada item

//  const novoArrayNomes = produtos.map((item, index, array) => {
//         return item.nome
//     })
                                      
//     console.log(novoArrayNomes)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const novoArray = produtos.map((item) => {
// 	const nomes = item.nome
// 	const menos5 = (item.preco * 0.95).toFixed(2)
// 	return { nomes, menos5 }
// })
// console.log(novoArray)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const arrayBebidas = produtos.filter((item) => {
    
//     return item.categoria === "Bebidas"
// })
// console.log (arrayBebidas)


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const arrayYpe = produtos.filter((item) => {
    
//     return  item.nome.includes("Ypê") === true
// })
// console.log (arrayYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const arrayYpe = produtos.filter((item) => {
//     return  item.nome.includes("Ypê") === true
// })

// for (let i=0 ; i <= arrayYpe.length ; i++){
//     nomes = arrayYpe[i].nome
//     preco = arrayYpe[i].preco 
//     console.log (["Compre "+ nomes + " por " + preco])
//  }

 