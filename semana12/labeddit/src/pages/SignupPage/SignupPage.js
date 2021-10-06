import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import SignupForm from './SignupForm'

const SignupPage = ({ setRightButtonText, leftButton, setLeftButton }) => {
    useUnprotectedPage()
    return (
        <div>
            <SignupForm
                setRightButtonText={setRightButtonText}
                leftButton={leftButton}
                setLeftButton={setLeftButton}
            />
        </div>
    )
}

export default SignupPage