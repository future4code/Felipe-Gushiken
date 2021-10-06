import React from 'react'
import logo from '../../img/photo01.jpg'
import SignupForm from './SignupForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { SignupContainer } from './styled'

const SignupPage = () => {
    useUnprotectedPage()

    return (
        <SignupContainer>
            <img src={logo}></img>
            <SignupForm />
            {/* formulário dos botões estão no componente SignupForm */}
        </SignupContainer>
    )
}

export default SignupPage