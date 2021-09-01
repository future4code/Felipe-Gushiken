import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import SignupForm from './SignupForm'

const SignupPage = () => {
    useUnprotectedPage()
    return (
        <div>
            <SignupForm />
        </div>
    )
}

export default SignupPage