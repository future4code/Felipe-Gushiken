import axios from 'axios'
import { React } from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../constants/url'
import useForm from '../hooks/useForm'
import { MainContainer, HeaderContainer, ButtonContainer, FormContainer } from '../styles/Styled'

export const CreateTripPage = () => {
    const history = useHistory()

    const {form, onChange} = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})

    const goToPreviousPage = () => {
        history.push("/admin/trips/list")
    }

    const goHome = () => {
        history.push("/")
    }

    const createTrip = (event) => {
        event.preventDefault()
        const token = localStorage.getItem("token")

        axios.post(`${baseUrl}/trips`, form, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                alert("Viagem criada!")
                console.log(response.data.trip)
                // ({ setName: "", setPlanet: "ESCOLHA O DESTINO", setDate: "", setDescription: "", setDurationInDays: "" })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    return (
        <MainContainer>
            <HeaderContainer>
                <h1 onClick={goHome}>LabeX</h1>
            </HeaderContainer>
            <ButtonContainer>
                <button onClick={goToPreviousPage}>
                    VOLTAR
                </button>
            </ButtonContainer>
            <FormContainer onSubmit={createTrip}>
                <input
                    name="name"
                    placeholder="NOME"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                ></input>
                <select
                    name="planet"
                    placeholder="PLANETA"
                    value={form.planet}
                    onChange={onChange}
                >
                    <option>ESCOLHA O DESTINO</option>
                    <option>ALFHEIM</option>
                    <option>ASGARD</option>
                    <option>CONTRAXIA</option>
                    <option>EGO</option>
                    <option>HALA</option>
                    <option>JOTUNHEIM</option>
                    <option>JUPITER</option>
                    <option>MARS</option>
                    <option>MORAG</option>
                    <option>NORNHEIM</option>
                    <option>OREX-II</option>
                    <option>SAKAAR</option>
                    <option>SATURN</option>
                    <option>SVARTALFHEIM</option>
                    <option>TERRA</option>
                    <option>TITAN</option>
                    <option>VANAHEIM</option>
                    <option>VORMIR</option>
                    <option>XANDAR</option>
                    <option>ZEN-WHOBERI</option>
                </select>
                <input
                    name="date"
                    type="date"
                    placeholder="DATA DA PARTIDA"
                    value={form.date}
                    onChange={onChange}
                ></input>
                <input
                    name="description"
                    placeholder="DESCRIÇÃO DA VIAGEM"
                    value={form.description}
                    onChange={onChange}
                ></input>
                <input
                    name="durationInDays"
                    placeholder="QUANTOS DIAS DE VIAGEM?"
                    value={form.durationInDays}
                    onChange={onChange}
                ></input>
                <button>ENVIAR</button>
            </FormContainer>
        </MainContainer>
    )
}