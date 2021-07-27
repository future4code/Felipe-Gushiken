import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: "felipe-gushiken-lovelace"
  }
}


class App extends React.Component {
  state = {
    listaUsers: [],
    nameUser: "",
    emailUser: ""
  }

  componentDidMount() {
    this.getAllUsers()
  }

  mudaInputName = (event) => {
    this.setState({ nameUser: event.target.value })
  }

  mudaInputEmail = (event) => {
    this.setState({ emailUser: event.target.value })
  }

  createUser = () => {
    const body = {
      name: this.state.nameUser,
      email: this.state.emailUser
    }
    axios.post(url, body, headers)
      .then((resposta) => {
        this.setState({ nameUser: "" })
        this.setState({ emailUser: "" })
        this.getAllUsers()
        console.log(resposta)
      })
      .catch((erro) => {
        // alert(erro.response.data.message)
        console.log(erro.response)
      })
  }

  getAllUsers = () => {
    axios.get(url, headers)
    .then((resposta) => {
      this.setState({listaUsers: resposta.data})
    })
    .catch((erro) => {
      // alert(erro.response)
      console.log(erro.response)
    })
  }

  render() {
    // console.log(this.state.nameUser)
    const componenteUsers = this.state.listaUsers.map((user) => {
      return <p>{user.name}</p>
    })

    return (
      <div>
        <input
          placeholder="Digite o seu nome"
          value={this.state.nameUser}
          onChange={this.mudaInputName}
        />
        <input
          placeholder="Digite o seu e-mail"
          value={this.state.emailUser}
          onChange={this.mudaInputEmail}
        />
        <button
          onClick={this.createUser}
        >Enviar</button>
        {componenteUsers}
      </div>
    )
  }
}

export default App;