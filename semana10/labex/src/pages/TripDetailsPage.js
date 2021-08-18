import axios from 'axios'
import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { baseUrl } from '../constants/url'

export const TripDetailsPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const getTripDetail = () => {
        const token = localStorage.getItem("token")

        axios.get(`${baseUrl}/trip/Ip65W5rK0d1DDRPUia7a`, {
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
        getTripDetail()
    }, [])

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token === null) {
            history.push("/login")
        }
    }, [])

    return (
        <div>
            DETALHES DA VIAGEM
            <button onClick={goBack}>
                VOLTAR
            </button>
        </div>
    )
}