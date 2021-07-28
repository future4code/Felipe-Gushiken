import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

button{
    width: 100px;
    margin-top: 15px;

    :hover{
        cursor: pointer
    }
}
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "felipe-gushiken-lovelace"
    }
}

class TelaCadastro extends React.Component {
    state = {
        nameUser: "",
        emailUser: ""
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
                alert("Usuário cadastrado com sucesso")
            })
            .catch((erro) => {
                alert(erro.response.data.message)
            })
    }

    render() {

        return (
            <Main>
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
                >ENVIAR</button>
                <button
                onClick={this.props.irParaLista}
                >LISTA</button>
            </Main>
        )
    }
}

export default TelaCadastro;
