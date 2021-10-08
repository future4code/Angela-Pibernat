// EXERCÍCIO 01

 
function inverteArray(array) {
  let arrayInvertida = []
   for (let i = array.length-1 ; i >= 0; i--){
    
    arrayInvertida.push(array[i])
   }
   console.log (arrayInvertida)
   return arrayInvertida
}
 

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

let arrayNumerosPares = []

for(let i=0 ; i < array.length ; i++){
  if (array[i]%2 === 0){
    arrayNumerosPares.push(array[i]**2)
   } 
}
console.log (arrayNumerosPares)
return arrayNumerosPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

let arrayNumerosPares = []

for(let i=0 ; i < array.length ; i++){
  if (array[i]%2 === 0){
    arrayNumerosPares.push(array[i])
   } 
}
console.log (arrayNumerosPares)
return arrayNumerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let numeroMaior = array[0]
    for(let i=0 ; i < array.length ; i++){
      let numeroDaVez = array[i]
      if (numeroDaVez > numeroMaior){
        numeroMaior = numeroDaVez
      }
    }
 console.log (numeroMaior)     
 return numeroMaior    
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  quantidadeDeElementos = array.length
  console.log (array.length)
  return quantidadeDeElementos
  
}

// EXERCÍCIO 06

function retornaExpressoesBooleanas() {
  
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  const respostas = [(booleano1 && booleano2 && !booleano4),(booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1),!(booleano2 && booleano3) || !(booleano1 && booleano3),
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]

 return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  for (let i=0; numerosPares.length<n; i++){
    if (i%2 === 0){
    numerosPares.push(i)
    }
  }
  return numerosPares
}


// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a===b && b===c){
  return 'Equilátero'
  } 
  if (a===b || a===c || b===c){
  return 'Isósceles'
  }
  if (a!==b && b!==c && c!==a){
  return 'Escaleno'
}}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let X
  let Y
  let Z
 if (num1>num2){
   X=num1
 }else{ X=num2}

 if (num1%num2===0 || num2%num1===0){
  Y=true
 }else{Y=false}

Z=Math.abs(num2-num1)

  const objeto = {
    maiorNumero: X,
    maiorDivisivelPorMenor: Y,
    diferenca: Z
  }
  return objeto
}

// EXERCÍCIO 10

function segundoMaiorEMenor(array) {

    for (let j = array.length-1 ; j > 0 ; j--){ 
      for (let i = 0 ; i < j ; i++){     
        if (array[i] > array[i+1]){
          [array[i], array[i+1]] = [array[i+1], array[i]] 
        }
      }
    }
    let segundoMaior = array[array.length-2]
    let segundoMenor = array[1]
    return [segundoMaior , segundoMenor]
  }
 

// EXERCÍCIO 11

function ordenaArray(array) {

  for (let j = array.length-1 ; j > 0 ; j--){ //indice 1
    for (let i = 0 ; i < j ; i++){     // 36
      if (array[i] > array[i+1]){
        [array[i], array[i+1]] = [array[i+1], array[i]] // [12, 36, 7, 56, 3]
      }
    }
  }
  console.log (array)
  return array
}
  

// EXERCÍCIO 12

function filmeFavorito() {
    const objeto = {
    nome: "O Diabo Veste Prada",
    ano:2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
 
return objeto
}


// EXERCÍCIO 13
function imprimeChamada() {
  const objeto = {
    nome: "O Diabo Veste Prada",
    ano:2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
   }
   return (`Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores}.`)
  
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

const objeto = {
largura: lado1,
altura: lado2,
perimetro: 2 * (lado1 + lado2),
area: lado1 * lado2}
return objeto
}
console.log (objeto)


// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}