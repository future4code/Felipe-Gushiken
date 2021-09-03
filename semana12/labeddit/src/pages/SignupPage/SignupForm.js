import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';
import { FormContainer } from './styled'
import { signup } from '../../services/users';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress'
import logo from '../../img/logo200.png'

const SignupForm = ({ setRightButtonText, leftButton, setLeftButton }) => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(form, clear, history, setRightButtonText, setLeftButton, setIsLoading)
    }

    return (
        <FormContainer>
            <img src={logo} alt={"logo do labeddit"}/>
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
                    helperText="Must be at least 8 characters "
                />
                <Button
                    type={"submit"}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Signup</> }
                </Button>
            </form>
        </FormContainer>
    )
}

export default SignupForm