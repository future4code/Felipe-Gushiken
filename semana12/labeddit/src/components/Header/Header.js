import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, ButtonContainer, HeadContainer } from './styled'
import Button from '@material-ui/core/Button';
import { goToFeed, goToLogin, goToSignup, goToHome } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const Header = ({ rightButtonText, setRightButtonText, leftButton, setLeftButton }) => {
    const history = useHistory()
    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Signup")
            goToHome(history)
        } else {
            goToSignup(history)
        }
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <HeadContainer>
                    <img src="https://img.icons8.com/bubbles/50/000000/blockchain-technology.png" alt={"Ícone do labeddit"} />
                    <h3 onClick={() => goToFeed(history)}>labeddit</h3>
                </HeadContainer>
                <ButtonContainer>
                    <Button
                        color="inherit"
                        onClick={() => goToLogin(history)}
                    >{leftButton}
                    </Button>
                    <Button
                        color="inherit"
                        onClick={rightButtonAction}
                    >{rightButtonText}</Button>
                </ButtonContainer>
            </Toolbar>
        </AppBar>
    )
}

export default Header