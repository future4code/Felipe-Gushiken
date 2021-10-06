import { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { SendPostContainer } from './styled'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { baseUrl } from "../../constants/urls"
import CircularProgress from '@material-ui/core/CircularProgress'

const FeedForm = (props) => {

    const [form, onChange, clear] = useForm({ title: "", body: "" })
    const [isLoading, setIsLoading] = useState(false)

    const createPost = (form, clear, setIsLoading) => {
        setIsLoading(true)
        const body = {
            title: form.title,
            body: form.body
        }

        axios.post(`${baseUrl}/posts`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(() => {
            setIsLoading(false)
            axios.get(`${baseUrl}/posts`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((response) => {
                console.log(response)
                props.setFeed(response.data)
                clear()
            })
            .catch((err) => {
                console.log(err.response)
            })
        })
        .catch(() => {
            setIsLoading(false)
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear, setIsLoading)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SendPostContainer>
                <TextField
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    type={"text"}
                    label={"Title"}
                    variant="standard"
                    multiline
                    color={"secondary"}
                    margin={"normal"}
                />
                <TextField
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    type={"text"}
                    label={"What's going on?"}
                    variant="outlined"
                    multiline
                    color={"secondary"}
                    margin={"normal"}
                />
                <Button
                    type={"submit"}
                    variant="contained"
                    color="primary"
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Post</>}
                </Button>
            </SendPostContainer>
        </form>
    )
}

export default FeedForm