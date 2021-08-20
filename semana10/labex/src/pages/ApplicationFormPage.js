import axios from 'axios'
import { React} from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../constants/url'
import useForm from '../hooks/useForm'
import { MainContainer, HeaderContainer, ButtonContainer, FormContainer } from '../styles/Styled'

export const ApplicationFormPage = () => {
    const history = useHistory()

    const {form, onChange} = useForm({name: "", age: "", applicationText: "", profession: "", country: ""})

    const goBack = () => {
        history.goBack()
    }

    const goHome = () => {
        history.push("/")
    }

    const applyTotrip = (event, id) => {
        event.preventDefault()

        axios.post(`${baseUrl}/trips/${id}/apply`, form)
            .then(() => {
                alert("Solicitação enviada!")
                ({setName: "", setAge: "", setApplicationText: "", setProfession: "", setCountry: ""})
            })
            .catch((err) => {

            })
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
            <FormContainer onSubmit={applyTotrip}>
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
                <input
                    name="country"
                    placeholder="PAÍS DE ORIGEM"
                    value={form.country}
                    onChange={onChange}
                ></input>
                <button>ENVIAR</button>
            </FormContainer>
        </MainContainer>
    )
}