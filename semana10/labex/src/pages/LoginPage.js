import axios from 'axios'
import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { baseUrl } from '../constants/url'

const MainContainer = styled.div`
    width: auto;
    height: 95vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(240,151,153,1) 0%, rgba(43,22,55,1) 100%, rgba(252,176,69,1) 100%);
    border: 5px solid #302038;
`
const HeaderContainer = styled.header`
    text-align: center;
    font-family: 'Train One', cursive;
    color: #302038;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
`
const LoginContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    
    input{
        margin-top: 10px;
        width: 20%;
        height: 40%;
    }
`

export const LoginPage = () => {
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const goBack = () => {
        history.goBack()
    }

    const submitLogin = () => {
        const body = {
            email: email,
            password: password
        }

        axios.post(`${baseUrl}/login`, body)
            .then((response) => {
                console.log(response.data.token)
                localStorage.setItem("token", response.data.token)
                history.push("/admin/trips/list")
            })
            .catch((err) => {
                console.log(err.response)
                alert("e-mail/usuário ou senha incorretos")
            })
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <MainContainer>
            <HeaderContainer>
                <h1>LabeX</h1>
            </HeaderContainer>
            <ButtonContainer>
                <button onClick={goBack}>
                    VOLTAR
                </button>
                <button onClick={submitLogin}>
                    LOGIN
                </button>
            </ButtonContainer>
            <LoginContainer>
                <input
                    placeholder="e-mail ou username"
                    value={email}
                    onChange={changeEmail}
                ></input>
                <input
                    placeholder="senha"
                    value={password}
                    onChange={changePassword}
                ></input>
            </LoginContainer>
        </MainContainer>
    )
}