import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { baseUrl } from '../constants/url'
import axios from 'axios'
import { useState } from 'react'

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
const DisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Overlock SC', cursive;
`
const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #302038;
    border-radius: 2%;
    align-items: center;
    width: 35%;
    margin: 5px 0;
    padding: 0px 10px;
    font-size: 1.2em;
    color: #302038;
`

export const ListTripsPage = () => {
    const history = useHistory()

    const [trips, setTrips] = useState([])

    const backButton = () => {
        history.goBack()
    }

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    const goHome = () => {
        history.push("/")
    }


    const getTrips = () => {
        axios.get(`${baseUrl}/trips`)
            .then((response) => {
                setTrips(response.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const showTrips = trips.map((trip) => {
        return (
            <TripsContainer>
                <p key={trip.id}><b>{trip.name.toUpperCase()}</b></p>
                <p>Pra onde? <b>{trip.planet}</b></p>
                <p>{trip.description}</p>
                <p>Quando? <b>{trip.date}</b></p>
                <p>Duração: <b>{trip.durationInDays}</b></p>
            </TripsContainer>
        )
    })

    useEffect(() => {
        getTrips()
    }, [])

    return (
        <MainContainer>
            <HeaderContainer>
                <h1 onClick={goHome}>LabeX</h1>
            </HeaderContainer>
            <ButtonContainer>
                <button onClick={backButton}>
                    VOLTAR
                </button>
                <button onClick={goToApplicationFormPage}>
                    INSCREVA-SE
                </button>
            </ButtonContainer>
            <DisplayContainer>
                {showTrips}
            </DisplayContainer>
        </MainContainer>
    )
}