import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { FormContainer } from './styled'

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()

    const onSubmit = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

    return (
        <FormContainer>
            <form onSubmit={onSubmit}>
                <TextField
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"e-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <TextField
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"senha"}
                    variant={"outlined"}
                    fullWidth
                    required
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    LOGIN
                </Button>
            </form>
        </FormContainer>
    )
}

export default LoginForm