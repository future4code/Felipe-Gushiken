import React from 'react'
import styled from 'styled-components'
import TelaCadastro from './components/TelaCadastro'
import TelaLista from './components/TelaLista'

const MainContainer = styled.div`

  h1{
    text-align: center;
  }
`

class App extends React.Component {
  state = {
    paginaSelecionada: false
  }

  alterarTela = () => {
    this.setState({paginaSelecionada: !this.state.paginaSelecionada})
  }

  render() {

    return (
      <MainContainer>
        <h1>LABENUSERS</h1>
        {this.state.paginaSelecionada ? <TelaLista irParaCadastro={this.alterarTela}/> : <TelaCadastro irParaLista={this.alterarTela}/>}
      </MainContainer>
    )
  }
}

export default App;