import React from "react";

const App = () => {
  const listaDeStrings = ["Banana", "Laranja", "Maçã"];

//   const frutas = [
//     <li>Banana</li>,
//     <li>Laranja</li>,
//     <li>Maçã</li>
//   ]

  const frutas = listaDeStrings.map((item) => {
      return (
          <li key={item}>   //a tag key vai sempre na tag mais externa que estamos retornando
              <b>{item}</b>
          </li>
      )
  })

  const listaDeNumeros = [1, 2, 3];

  const listaDeObjetos = [
    { id: 1, nome: "Bulbasauro", tipo: "Planta e Veneno" },
    { id: 2, nome: "Squirtle", tipo: "Água" },
    { id: 3, nome: "Charmander", tipo: "Fogo" }
  ];

  const pokemons = listaDeObjetos.map((item) => {
      return <div key={item.id}>        // a tag key vai sempre na tag mais externa que estamos retornando
          <p><b>Nome:</b> {item.nome}</p> // Nome em negrito
          <p>Tipo: {item.tipo}</p>
          <hr/>
      </div>
  })

  

  return (
    <div>
      <h1>Bom dia, Carver!</h1>
      {frutas}
      {pokemons}
    </div>
  );
};

export default App;