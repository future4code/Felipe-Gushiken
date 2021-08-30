import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../constants/url'
import { MainContainer, HeaderContainer, ButtonContainer, ListTripsContainer } from '../styles/Styled'
import "animate.css"

export const AdminHomePage = () => {
    const history = useHistory()

    const [trips, setTrips] = useState([])
 
    const goBack = () => {
        history.push("/login")
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
        if (token === null) {
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

    const deleteTrip = (id) => {
        const token = localStorage.getItem("token")

        axios.delete(`${baseUrl}/trips/${id}`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            getTrips()
            console.log(response.data.trip)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    const showTrips = trips.map((trip) => {
        return (
            <ListTripsContainer>
                <h3 class="animate__animated animate__fadeInDown" key={trip.id} onClick={() => goToTripsDetailsPage(trip.id)}>
                    <b>{trip.name.toUpperCase()}</b>
                </h3>
                <img class="animate__animated animate__fadeInDown" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" alt="Imagem de apagar" onClick={() => deleteTrip(trip.id)}/>
            </ListTripsContainer>
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
                    LOGOUT
                </button>
                <button onClick={goToCreateTripPage}>
                    CRIAR VIAGEM
                </button>
            </ButtonContainer>
            {showTrips}
        </MainContainer>
    )
}