import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { baseUrl } from '../constants/url'
import axios from 'axios'
import { useState } from 'react'
import { MainContainer, HeaderContainer, ButtonContainer } from '../styles/Styled'

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
    color: #fcd4d4;
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