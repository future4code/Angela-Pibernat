import './App.css'
import foto from "./img/angela.jpg"


function App() {

const clicouBotao = () => {
  alert("Bom dia")
}

const texto = "Esse é meu primeiro site React!"

  // Dentro do return vai apenas o JSX que retorna nosso layout.

  return (
    <div className="conteiner">
      <h1>Olá, eu sou a Angela</h1>
      <img className="foto" src={foto} />
      <p>{texto}</p>
      <button onClick={clicouBotao}>Clique aqui</button>
    </div>
  )
}

export default App
