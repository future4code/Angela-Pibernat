```function calculaNota(ex, p1, p2) {
  
    let notaPrimeiraProva = p1 
    let notaSegundaProva = p2 
    let notaExercicios = ex 
    const pesoP1 = 2
    const pesoP2 = 3
    const pesoEx = 1
    let mediaPonderada = ((notaPrimeiraProva*pesoP1)+(notaSegundaProva*pesoP2)+(notaExercicios*pesoEx))/(pesoP1+pesoP2+pesoEx)
      
      if (mediaPonderada>=9){
      return "A"
      }
      if(mediaPonderada>=7.5 && mediaPonderada<9){
      return "B"
      }
      if(mediaPonderada>=6 && mediaPonderada<7.5){
      return "C"
      }
      if(mediaPonderada<6){
      return "D"
      }
      
      return mediaPonderada 
  }```
 