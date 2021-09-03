import axios from 'axios'
import { baseUrl } from '../constants/urls'

export const createPost = (body, clear) => {
    axios.post(`${baseUrl}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((response) => {
        alert(response.data)
        clear()
    })
    .catch((err) => {
        console.log(err)
    })
}

export const createPostVote = (id, body) => {
    axios.post(`${baseUrl}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}


export const createComment = (id, body, clear, setComments) => {
    axios.post(`${baseUrl}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((response) => {
        alert(response.data)
        clear()
        setComments()
    })
    .catch((err) => {
        console.log(err)
        alert(err.response.data)
    })
}