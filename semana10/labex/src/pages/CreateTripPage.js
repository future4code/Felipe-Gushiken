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

    input:nth-child(4){
        height: 90px;
    }

    button{
        margin-top: 10px;
    }
`

export const CreateTripPage = () => {
    const history = useHistory()

    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [durationInDays, setDurationInDays] = useState("")

    const goBack = () => {
        history.goBack()
    }

    const goHome = () => {
        history.push("/")
    }


    const createTrip = () => {
        const token = localStorage.getItem("token")

        const body = {
            "name": name,
            "planet": planet,
            "date": date,
            "description": description,
            "durationInDays": durationInDays
        }

        axios.post(`${baseUrl}/trips`, body, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                alert("Viagem criada!")
                    ({ setName: "", setPlanet: "", setDate: "", setDescription: "", setDurationInDays: "" })
            })
            .catch((err) => {

            })
    }

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changePlanet = (event) => {
        setPlanet(event.target.value)
    }

    const changeDate = (event) => {
        setDate(event.target.value)
    }

    const changeDescription = (event) => {
        setDescription(event.target.value)
    }

    const changeDurationInDays = (event) => {
        setDurationInDays(event.target.value)
    }

    return (
        <MainContainer>
            <HeaderContainer>
                <h1 onClick={goHome}>LabeX</h1>
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
                    placeholder="PLANETA"
                    value={planet}
                    onChange={changePlanet}
                ></input>
                <input
                    placeholder="DATA DA PARTIDA"
                    value={date}
                    onChange={changeDate}
                ></input>
                <input
                    placeholder="DESCRIÇÃO DA VIAGEM"
                    value={description}
                    onChange={changeDescription}
                ></input>
                <input
                    placeholder="QUANTOS DIAS DE VIAGEM?"
                    value={durationInDays}
                    onChange={changeDurationInDays}
                ></input>
                <button onClick={createTrip}>ENVIAR</button>
            </FormContainer>
        </MainContainer>
    )
}