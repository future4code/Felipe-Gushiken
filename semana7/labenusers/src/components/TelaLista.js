import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ListaUsuarios = styled.div`
    text-align: center;
    margin-left: 15px;

p{
    padding: 5px;
}

button{
    width: 100px;
    margin: 7px;

    :hover{
        cursor: pointer;
    }
}
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const urlDelete = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"

const headers = {
    headers: {
        Authorization: "felipe-gushiken-lovelace"
    }
}

class TelaLista extends React.Component {
    state = {
        listaUsers: [],
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(url, headers)
            .then((resposta) => {
                this.setState({ listaUsers: resposta.data })
            })
            .catch((erro) => {
                alert(erro.response)
            })
    }

    deleteUser = () => {
        axios.delete(urlDelete, headers)
        .then()
        .catch()
    }

    render() {
        const componenteUsers = this.state.listaUsers.map((user) => {
            return <p key={user.id}>{user.name}</p>

        })
        return (
            <ListaUsuarios>
                <h4>USUÁRIOS CADASTRADOS</h4>
                {componenteUsers}
                <button
                    onClick={this.props.irParaCadastro}
                >VOLTAR</button>
            </ListaUsuarios>
        )
    }
}

export default TelaLista;