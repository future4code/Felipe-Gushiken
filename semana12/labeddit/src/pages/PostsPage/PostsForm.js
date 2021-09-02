import useForm from "../../hooks/useForm";
import { createComment } from "../../services/posts";
import { TextField, Button } from '@material-ui/core'
import { baseUrl } from "../../constants/urls";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { PostForm } from './styled'

const PostsForm = () => {

    const params = useParams()

    const [form, onChange, clear] = useForm({body: ""})
    // console.log(form)

    const onSubmitComment = (event) => {
        event.preventDefault()
        console.log(form)
        // createComment(form, clear)
        const body = {
            body: form.body
        }

        axios.post(`${baseUrl}/posts/${params.id}/comments`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
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
                    Post
                </Button>
        </PostForm>
    )
}
export default PostsForm