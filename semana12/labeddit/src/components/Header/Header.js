import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, ButtonContainer, HeadContainer } from './styled'
import Button from '@material-ui/core/Button';
import { goToFeed, goToLogin, goToSignup } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()

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
                    >Login
                    </Button>
                    <Button 
                        color="inherit"
                        onClick={() => goToSignup(history)}
                    >Signup</Button>
                </ButtonContainer>
            </Toolbar>
        </AppBar>
    )
}

export default Header