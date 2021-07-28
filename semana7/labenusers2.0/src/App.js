import React from 'react'
import TelaCadastro from './components/TelaCadastro'
import TelaDetalhes from './components/TelaDetalhes'
import TelaLista from './components/TelaLista'

class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaLista irParaCadastro={this.irParaCadastro}/>
      case "detalhes":
        return <TelaDetalhes irParaDetalhes={this.irParaDetalhes}/>
      default:
        return <div>Erro404</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  irParaDetalhes = () => {
    this.setState({telaAtual: "detalhes"})
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}

export default App;
