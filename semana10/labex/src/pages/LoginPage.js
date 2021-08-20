import axios from 'axios'
import { React} from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../constants/url'
import useForm from '../hooks/useForm'
import { MainContainer, HeaderContainer, ButtonContainer, LoginContainer } from '../styles/Styled'

export const LoginPage = () => {
    const history = useHistory()

    const {form, onChange} = useForm({email: "", password: ""})

    const goBack = () => {
        history.goBack("/login")
    }

    const goHome = () => {
        history.push("/")
    }


    const submitLogin = (event) => {
        event.preventDefault()

        axios.post(`${baseUrl}/login`, form)
            .then((response) => {
                console.log(response.data.token)
                localStorage.setItem("token", response.data.token)
                history.push("/admin/trips/list")
            })
            .catch((err) => {
                console.log(err.response)
                alert("e-mail/usuário ou senha incorretos")
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
            <LoginContainer onSubmit={submitLogin}>
                <input
                    name="email"
                    placeholder="e-mail ou username"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                ></input>
                <input
                    name="password"
                    placeholder="senha"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    required
                    pattern={"^.{3,}"}
                    title={"A senha deve ter 3 caracteres no mínimo."}
                ></input>
                <button>
                    LOGIN
                </button>
            </LoginContainer>
        </MainContainer>
    )
}