import React from "react"
import styled from "styled-component"

const CardProf = styled.div
    display: flex;
    border: 1px solid gray ;
    margin: 8px 0;
    padding: 0 8px;
    justify-content: space-between;
    align-itens: center ;

const TextoLaranja = styled.p  //criando a tag TextoLaranja para estilizar a tag p que for substituida por essa tag
    color: orange ;


class App extends React.Component {  //transformando em componente de classe

  const listaDeProfs = [
    {id: 1, nome: "Chijo", idade: 27},
    {id: 2, nome: "Fezoca", idade: 28},
    {id: 3, nome: "Indio", idade: 29},
    {id: 4, nome: "Yuzo", idade: 30}
  ]

  instrutores = this.listaDeProfs.map((prof) => {  //transformando em componente de classe
        return (
        <CardProf key = {prof.id}>
            <p><b>{prof.nome</b></p>
            <TextoLaranja>{prof.idade</TextoLaranja>
        </CardProf>
        )
  })

  render (){  //transformando em componente de classe
  return (
    <div>
      <h1>Pessoas Instrutoras</h1>
      {this.instrutores}   //transformando em componente de classe
    </div>
  )
}

export default App