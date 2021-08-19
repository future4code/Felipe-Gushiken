import {React, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
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

export const AdminHomePage = () => {
    const history = useHistory()

    const [trips, setTrips] = useState([])

    const goBack = () => {
        history.goBack()
    }

    const goHome = () => {
        history.push("/")
    }


    const goToTripsDetailsPage = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token === null) {
            history.push("/login")
        }
    }, [])

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
            <div>
                <p key={trip.id} onClick={goToTripsDetailsPage(trip.id)}><b>{trip.name.toUpperCase()}</b></p>
            </div>
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
            <button onClick={goBack}>
                VOLTAR
            </button>
            <button onClick={goToCreateTripPage}>
                CRIAR VIAGEM
            </button>
            </ButtonContainer>
            {showTrips}
            <p onClick={goToTripsDetailsPage}>DETALHES DA VIAGEM</p>
        </MainContainer>
    )
}