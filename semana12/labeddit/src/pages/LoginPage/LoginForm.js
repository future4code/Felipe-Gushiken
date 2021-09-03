import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';
import { FormContainer } from './styled'
import { login } from '../../services/users'
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress'
import logo from '../../img/logo200.png'

const LoginForm = ({ setRightButtonText, leftButton, setLeftButton }) => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText, setLeftButton, setIsLoading)
    }

    return (
        <FormContainer>
            <img src={logo} alt={"logo do labeddit"}/>
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
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Login</> }
                </Button>
            </form>
        </FormContainer>
    )
}

export default LoginForm