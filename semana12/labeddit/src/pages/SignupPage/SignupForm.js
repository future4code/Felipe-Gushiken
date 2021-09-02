import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';
import { FormContainer } from './styled'
import { signup } from '../../services/users';
import { useHistory } from 'react-router-dom';

const SignupForm = ({ setRightButtonText, leftButton, setLeftButton }) => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(form, clear, history, setRightButtonText, setLeftButton)
    }

    return (
        <FormContainer>
            <h1>Página de Signup</h1>
            <form onSubmit={onSubmitForm} noValidate autoComplete="off">
                <TextField
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    type={"text"}
                    label={"Name"}
                    variant={"outlined"}
                    required
                    error
                    fullWidth
                />
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
                    // margin={"normal"}
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
                    Signup
                </Button>
            </form>
        </FormContainer>
    )
}

export default SignupForm