import axios from 'axios'
import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { baseUrl } from '../constants/url'

const MainContainer = styled.div`
    width: auto;
    height: 95%;
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

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 100px;
    
    input{
        margin-top: 10px;
        width: 30%;
        height: 40%;
    }

    input:nth-child(3){
        height: 90px;
    }

    button{
        margin-top: 10px;
    }
`

export const ApplicationFormPage = () => {
    const history = useHistory()

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")

    const goBack = () => {
        history.goBack()
    }

    const goHome = () => {
        history.push("/")
    }


    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeAge = (event) => {
        setAge(event.target.value)
    }

    const changeApplicationText = (event) => {
        setApplicationText(event.target.value)
    }

    const changeProfession = (event) => {
        setProfession(event.target.value)
    }

    const changeCountry = (event) => {
        setCountry(event.target.value)
    }

    const applyTotrip = (id) => {

        const body = {
            "name": name,
            "age": age,
            "applicationText": applicationText,
            "profession": profession,
            "country": country
        }

        axios.post(`${baseUrl}/trips/${id}/apply`, body)
            .then((response) => {
                alert("Solicitação enviada!")
                ({setName: "", setAge: "", setApplicationText: "", setProfession: "", setCountry: ""})
            })
            .catch((err) => {

            })
    }

    return (
        <MainContainer>
            <HeaderContainer>
                <h1 onClick={goBack}>LabeX</h1>
            </HeaderContainer>
            <ButtonContainer>
                <button onClick={goBack}>
                    VOLTAR
                </button>
            </ButtonContainer>
            <FormContainer>
                <input
                    placeholder="NOME"
                    value={name}
                    onChange={changeName}
                ></input>
                <input
                    placeholder="IDADE"
                    value={age}
                    onChange={changeAge}
                ></input>
                <input
                    placeholder="DESCREVA A SUA MOTIVAÇÃO PARA ESSA VIAGEM"
                    value={applicationText}
                    onChange={changeApplicationText}
                ></input>
                <input
                    placeholder="PROFISSÃO"
                    value={profession}
                    onChange={changeProfession}
                ></input>
                <input
                    placeholder="PAÍS DE ORIGEM"
                    value={country}
                    onChange={changeCountry}
                ></input>
                <button onClick={applyTotrip}>ENVIAR</button>
            </FormContainer>
        </MainContainer>
    )
}