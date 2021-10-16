```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salario = 2000
 const comissao = 100
 const percentual = 0.05
 let valorDaComissao = (qtdeCarrosVendidos*comissao) + (valorTotalVendas*percentual)
 let salarioFinalMes = salario+valorDaComissao
 return salarioFinalMes
}
```
