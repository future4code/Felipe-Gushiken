import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText, setLeftButton, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${baseUrl}/users/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeed(history)
        setRightButtonText("Logout")
        setLeftButton(null)
        setIsLoading(false)
    })
    .catch(() => {
        alert("Não foi possível fazer login")
        setIsLoading(false)

    })
}

export const signup = (body, clear, history, setRightButtonText, setLeftButton, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${baseUrl}/users/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeed(history)
        setRightButtonText("Logout")
        setLeftButton(null)
        setIsLoading(false)
    })
    .catch(() => {
        alert("Não foi possível cadastrar o usuário")
        setIsLoading(false)
    })
}