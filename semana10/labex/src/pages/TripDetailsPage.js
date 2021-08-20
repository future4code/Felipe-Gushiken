import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { baseUrl } from '../constants/url'
import { MainContainer, HeaderContainer, ButtonContainer, DetailsContainer, DetailsBox } from '../styles/Styled'
import "animate.css"

export const TripDetailsPage = () => {
    const history = useHistory()

    const params = useParams()

    const idTrips = params.id

    const [tripDetails, setTripDetails] = useState({ candidates: [], approved: [] })

    const goBack = () => {
        history.goBack()
    }

    const goHome = () => {
        history.push("/")
    }


    const getTripDetail = (id) => {
        const token = localStorage.getItem("token")

        axios.get(`${baseUrl}/trip/${id}`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setTripDetails(response.data.trip)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const decideCandidate = (candidateId) => {
        const token = localStorage.getItem("token")

        const body = {
            "approve": true
        }

        axios.put(`${baseUrl}/trips/${params.id}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    useEffect(() => {
        getTripDetail(idTrips)
    }, [])

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            history.push("/login")
        }
    }, [])

    const showTripDetails = () => {
        return (
            <DetailsContainer>
                <DetailsBox>
                    <h2 class="animate__animated animate__pulse">{tripDetails.name}</h2>
                    <p class="animate__animated animate__pulse">Planeta: {tripDetails.planet}</p>
                    <p class="animate__animated animate__pulse">Descrição: {tripDetails.description}</p>
                    <p class="animate__animated animate__pulse">Data de embarque: {tripDetails.date}</p>
                    <p class="animate__animated animate__pulse">Quantos dias? {tripDetails.durationInDays}</p>
                </DetailsBox>
                <hr />
                <div>
                    <h3>CONFIRMADOS</h3>
                    {tripDetails.approved.map((user) => {
                        return (
                            <ul>
                                <li>{user.name}</li>
                                <li>{user.age}</li>
                                <li>{user.applicationText}</li>
                                <li>{user.profession}</li>
                                <li>{user.country}</li>
                            </ul>
                        )
                    })}
                </div>
                <div>
                    <h3>CANDIDATOS</h3>
                    {tripDetails.candidates.map((user) => {
                        return (
                            <ul>
                                <li>{user.name}</li>
                                <li>{user.age}</li>
                                <li>{user.applicationText}</li>
                                <li>{user.profession}</li>
                                <li>{user.country}</li>
                                <button onClick={() => decideCandidate()}>APROVAR</button>
                            </ul>
                        )
                    })}
                </div>
            </DetailsContainer>
        )
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
            {showTripDetails()}
        </MainContainer>
    )
}