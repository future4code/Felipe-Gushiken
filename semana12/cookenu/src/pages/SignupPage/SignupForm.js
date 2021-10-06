import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { signup } from '../../services/user'
import { FormContainer } from './styled'

const SignupForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const onSubmit = (event) => {
        console.log(form)
        event.preventDefault()
        signup(form, clear, history)
    }
    return (
        <FormContainer>
            <form onSubmit={onSubmit}>
                <TextField
                    type={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"nome"}
                    variant={"outlined"}
                    fullWidth
                    required
                />
                <TextField
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"e-mail"}
                    variant={"outlined"}
                    margin={"normal"}
                    fullWidth
                    required
                />
                <TextField
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"senha"}
                    variant={"outlined"}
                    margin={"normal"}
                    fullWidth
                    required
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    CADASTRAR
                </Button>
            </form>
        </FormContainer>
    )
}

export default SignupForm