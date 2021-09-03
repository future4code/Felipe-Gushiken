import { TextField, Button } from '@material-ui/core'
import { SendPostContainer } from './styled'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { baseUrl } from "../../constants/urls";

const FeedForm = (props) => {

    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            title: form.title,
            body: form.body
        }

        axios.post(`${baseUrl}/posts`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
            console.log(response.data)
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
        .catch((err) => {
            console.log(err.response)
        })
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
                    Post
                </Button>
            </SendPostContainer>
        </form>
    )
}

export default FeedForm