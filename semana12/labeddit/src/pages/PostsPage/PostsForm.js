import { useState } from 'react'
import useForm from "../../hooks/useForm";
import { TextField, Button } from '@material-ui/core'
import { baseUrl } from "../../constants/urls";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { PostForm } from './styled'
import CircularProgress from '@material-ui/core/CircularProgress'

const PostsForm = (props) => {

    const params = useParams()

    const [form, onChange, clear] = useForm({ body: "" })
    const [isLoading, setIsLoading] = useState(false)

    const createComment = (form, clear, setIsLoading) => {
        setIsLoading(true)
        const body = {
            body: form.body
        }

        axios.post(`${baseUrl}/posts/${params.id}/comments`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => {
                setIsLoading(false)
                axios.get(`${baseUrl}/posts/${params.id}/comments`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                })
                    .then((response) => {
                        console.log(response)
                        props.setComments(response.data)
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

    const onSubmitComment = (event) => {
        event.preventDefault()
        createComment(form, clear, setIsLoading)
    }

    return (
        <PostForm onSubmit={onSubmitComment}>
            <TextField
                name={"body"}
                value={form.body}
                onChange={onChange}
                type={"text"}
                label={"Comment"}
                variant="standard"
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
        </PostForm>
    )
}
export default PostsForm