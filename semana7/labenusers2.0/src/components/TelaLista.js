import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TelaDetalhes from './TelaDetalhes'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 97vh;
    background: rgb(180,58,60);
    background: linear-gradient(90deg, rgba(180,58,60,1) 0%, rgba(238,113,111,1) 31%, rgba(252,176,69,1) 100%);
    overflow: hidden;

h1, h3{
    color: #6b1107
}

button{
    padding: 5px;
    align-self: center;
    box-shadow: 9px 4px 5px 0px rgba(50, 50, 51, 0.34);
    background-color: #eb9086;
    border-radius: 8%;

    :hover{
        cursor: pointer;
        background-color: #ed6d5f;
    }
}
`

const CardUsuario = styled.div`
    border: 1px solid #6b1107;
    margin: 5px;
    padding: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;

p{
    color: #6b1107;
    font-size: 15px;
}
`


class TelaLista extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "felipe-gushiken-lovelace"
            }
        })
            .then((resposta) => {
                this.setState({ usuarios: resposta.data })
            })
            .catch((erro) => {
                alert(erro.response.data.message)
            })
    }
    
    deletarUsuario = (id) => {

        if (window.confirm("Deseja mesmo apagar o usuário?")) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "felipe-gushiken-lovelace"
            }
        })
            .then((resposta) => {
                alert("Usuário deletado com sucesso!")
                this.pegarUsuarios()
            })
            .catch((erro) => {
                alert("Ocorreu um erro.")
            })
        } else {
            alert("Usuário não apagado")
        }   
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return <CardUsuario key={usuario.id}>
                <p>{usuario.name}</p>
                <button onClick={this.props.irParaDetalhes}>DETALHES</button>
                <button onClick={() => this.deletarUsuario(usuario.id)}>APAGAR</button>
            </CardUsuario>
        })

        return (
            <MainContainer>
                <h1>LABENUSERS</h1>
                <button onClick={this.props.irParaCadastro}>VOLTAR</button>
                <h3>USUÁRIOS CADASTRADOS</h3>
                {listaUsuarios}
            </MainContainer>
        )
    }
}

export default TelaLista;