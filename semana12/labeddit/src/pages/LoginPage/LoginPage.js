import React from 'react'
import LoginForm from './LoginForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({ setRightButtonText, leftButton, setLeftButton }) => {
    useUnprotectedPage()
    return (
        <div>
            <LoginForm
                setRightButtonText={setRightButtonText}
                leftButton={leftButton}
                setLeftButton={setLeftButton}
            />
        </div>
    )
}

export default LoginPage