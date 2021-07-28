import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 97vh;
    background: rgb(180,58,60);
    background: linear-gradient(90deg, rgba(180,58,60,1) 0%, rgba(238,113,111,1) 31%, rgba(252,176,69,1) 100%);
    
h1, h3{
    color: #6b1107;
}
`
const BoxContainer = styled.div`
    display: grid;
    margin: 15px;
    

input{
    margin: 5px;
    padding: 5px;
    box-shadow: 9px 4px 5px 0px rgba(50, 50, 51, 0.34);
    background-color: #f0ada5;
    border-radius: 8%;

    ::placeholder{
        color: #6b1107;
    }
}

button{
    margin: 5px;
    padding: 5px;
    box-shadow: 9px 4px 5px 0px rgba(50, 50, 51, 0.34);
    background-color: #eb9086;
    border-radius: 8%;

    :hover{
        cursor: pointer;
        background-color: #ed6d5f;
    }
}
`


class TelaCadastro extends React.Component {
    state = {
        name: "",
        email: ""
    }

    inputName = (event) => {
        this.setState({ name: event.target.value })
    }

    inputEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "felipe-gushiken-lovelace"
            }
        })
            .then((resposta) => {
                alert("Usuário cadastrado com sucesso!")
                this.setState({ name: "", email: "" })
            })
            .catch((erro) => {
                alert(erro.response.data.message)
            })
    }

    render() {
        return (
            <MainContainer>
                <h1>LABENUSERS</h1>
                <h3>CADASTRAR NOVO USUÁRIO</h3>
                <BoxContainer>
                    <input
                        placeholder={"Digite seu nome"}
                        value={this.state.name}
                        onChange={this.inputName}
                    />
                    <input
                        placeholder={"Digite seu e-mail"}
                        value={this.state.email}
                        onChange={this.inputEmail}
                    />
                    <button onClick={this.fazerCadastro}>CADASTRAR</button>
                    <button onClick={this.props.irParaLista}>LISTA</button>
                </BoxContainer>
            </MainContainer>
        )
    }
}

export default TelaCadastro;