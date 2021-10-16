```
function calculaPrecoTotal(quantidade) {
  if (quantidade<12){
    precoMaca = 1.30
  }else{
    precoMaca = 1.00
  }
  custoTotalCompra = precoMaca * quantidade
  return custoTotalCompra
}
```