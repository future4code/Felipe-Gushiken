import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

export const login = (body, clear, history) => {
    axios.post(`${baseUrl}/users/login`, body)
    .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => {
        console.log(err)
        alert("Não foi possível fazer login")
    })
}

export const signup = (body, clear, history) => {
    axios.post(`${baseUrl}/users/signup`, body)
    .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => {
        console.log(err)
        alert("Não foi possível cadastrar o usuário")
    })
}