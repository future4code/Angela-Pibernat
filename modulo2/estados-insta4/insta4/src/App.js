import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export default class App extends React.Component {
  state = {
    curtido = true
  }

  onClickCurtir = () =>{
    this.setState({
      curtido: !this.state.curtido
    })
    
  }

  render() {
    
    let nomeDoBotao;
    if(this.state.curtido){
      console.log("o estado é true")
      nomeDoBotao = "curtido"
    }else{
      console.log("o estado é false")
      nomeDoBotao = "descurtido"
    }
      return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
    );
  }


export default App;
