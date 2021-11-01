```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
 const verificaNumeroEscolhido = (item)=>{
    return item === numeroEscolhido
  }
  const numerosEscolhidos = arrayDeNumeros.filter(verificaNumeroEscolhido)
  
if (numerosEscolhidos.length===0){
    return "Número não encontrado"
}else{
    return`O número ${numeroEscolhido} aparece ${numerosEscolhidos.length}x`
}
}
```
