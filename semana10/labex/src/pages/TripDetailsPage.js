import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { baseUrl } from '../constants/url'
import styled from 'styled-components'

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

export const TripDetailsPage = () => {
    const history = useHistory()

    const params = useParams()
    
    const idTrip = params.id
    // console.log("id", idTrip)

    const [tripDetails, setTripDetails] = useState({candidates: []})

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
                console.log(response.data.trip.id)
                setTripDetails(response.data.trip)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        getTripDetail()
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
                    <h4>CANDIDATOS</h4>
                    {tripDetails.candidates.map((user) => {
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