import { TextField, Button } from '@material-ui/core'
import { SendPostContainer } from './styled'
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/posts'

const FeedForm = () => {
    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear)
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