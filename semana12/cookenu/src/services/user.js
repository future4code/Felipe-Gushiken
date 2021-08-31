import axios from 'axios'
import {baseUrl} from '../constants/urls'
import { goToRecipesList } from '../routes/coordinator'

export const login = (body, clear, history) => {
    axios.post(`${baseUrl}/user/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToRecipesList(history)
    })
    .catch((err) => {
        console.log(err)
        alert("Usuário não cadastrado")
    })
}

export const signup = (body, clear, history) => {
    axios.post(`${baseUrl}/user/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToRecipesList(history)
    })
    .catch((err) => {
        alert("Erro no cadastro!")
    })
}