import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';
import { FormContainer } from './styled'
import { login } from '../../services/users'
import { useHistory } from 'react-router-dom';

const LoginForm = ({ setRightButtonText, leftButton, setLeftButton }) => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText, setLeftButton)
    }

    return (
        <FormContainer>
            <h1>Página de Login</h1>
            <form onSubmit={onSubmitForm} noValidate autoComplete="off">
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    type={"email"}
                    label={"e-mail"}
                    variant={"outlined"}
                    required
                    error
                    fullWidth
                    margin={"normal"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    type={"password"}
                    label={"password"}
                    variant={"outlined"}
                    required
                    error
                    fullWidth
                />
                <Button
                    type={"submit"}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Login
                </Button>
            </form>
        </FormContainer>
    )
}

export default LoginForm