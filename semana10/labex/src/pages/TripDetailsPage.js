import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { baseUrl } from '../constants/url'
import { MainContainer, HeaderContainer, ButtonContainer } from '../styles/Styled'

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
            <div>
                <div>
                    <p>{tripDetails.name}</p>
                    <p>{tripDetails.planet}</p>
                    <p>{tripDetails.description}</p>
                    <p>{tripDetails.date}</p>
                    <p>{tripDetails.durationInDays}</p>
                </div>
                <div>
                    <h4>CONFIRMADOS</h4>
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
                    <h4>CANDIDATOS</h4>
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
            </div>
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