import React from 'react'
import LoginForm from './LoginForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = () => {
    useUnprotectedPage()
    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default LoginPage