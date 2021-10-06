import React from 'react'
import logo from '../../img/photo01.jpg'
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { goToSignup } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import {LoginContainer} from './styled'

const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    
    return (
        <LoginContainer>
            <img src={logo}></img>
            <LoginForm />
            {/* formulário dos botões estão no componente LoginForm */}
            <Button
                onClick={() => goToSignup(history)}
                type={"submit"}
                fullWidth
                variant={"text"}
                color={"primary"}
                margin={"normal"}
            >
                CADASTRE-SE
            </Button>
        </LoginContainer>
    )
}

export default LoginPage