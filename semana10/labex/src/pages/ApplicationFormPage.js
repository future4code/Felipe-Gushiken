import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../constants/url'
import useForm from '../hooks/useForm'
import { MainContainer, HeaderContainer, ButtonContainer, FormContainer } from '../styles/Styled'
import { countryList } from '../constants/countries'

export const ApplicationFormPage = () => {
    const history = useHistory()

    const { form, onChange } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    const [trips, setTrips] = useState([])

    const [id, setId] = useState("")

    const goBack = () => {
        history.goBack()
    }

    const goHome = () => {
        history.push("/")
    }

    const applyTotrip = (event) => {
        event.preventDefault()

        axios.post(`${baseUrl}/trips/${id}/apply`, form)
            .then(() => {
                alert("Solicitação enviada!")
            })
            .catch((err) => {

            })
    }

    const getTrips = () => {
        axios.get(`${baseUrl}/trips`)
            .then((response) => {
                setTrips(response.data.trips)
                console.log(response.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTrips()
    }, [])

    const changeTrip = (event) => {
        setId(event.target.value)
    }

    const showTrips = trips && trips.map((trip) => {
        return (
            <option key={trip.id} value={trip.id}>{trip.name}</option>
        )
    })

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
            <FormContainer onSubmit={applyTotrip}>
                <select
                    defaultValue={""}
                    onChange={changeTrip}
                >
                    <option value={""} disabled>ESCOLHA O DESTINO</option>
                    {showTrips}
                </select>
                <input
                    name="name"
                    placeholder="NOME"
                    value={form.name}
                    onChange={onChange}
                ></input>
                <input
                    name="age"
                    placeholder="IDADE"
                    value={form.age}
                    onChange={onChange}
                ></input>
                <input
                    name="applicationText"
                    placeholder="DESCREVA A SUA MOTIVAÇÃO PARA ESSA VIAGEM"
                    value={form.applicationText}
                    onChange={onChange}
                ></input>
                <input
                    name="profession"
                    placeholder="PROFISSÃO"
                    value={form.profession}
                    onChange={onChange}
                ></input>
                <select
                    name="country"
                    placeholder="PAÍS DE ORIGEM"
                    value={form.country}
                    onChange={onChange}
                >
                    <option value={""} disabled>PAÍS DE ORIGEM</option>
                    {countryList.map((country) => {
                        return (
                            <option value={country} key={country}>{country}</option>
                        )
                    })}
                </select>
                <button>ENVIAR</button>
            </FormContainer>
        </MainContainer>
    )
}