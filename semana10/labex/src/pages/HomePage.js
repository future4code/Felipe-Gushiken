import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import MainImage from '../img/homepage_img01.jpg'
import { MainContainer, HeaderContainer, ButtonContainer } from '../styles/Styled'

const ImageContainer = styled.div`
    height: 73vh;
`
const FooterContainer = styled.div`
    height: 1vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
`

export const HomePage = () => {
    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goHome = () => {
        history.push("/")
    }

    return (
        <MainContainer>
            <HeaderContainer>
                <h1 onClick={goHome}>LabeX</h1>
            </HeaderContainer>
            <ButtonContainer>
                <button onClick={goToListTripsPage}>
                    LISTA DE VIAGENS
                </button>
                <button onClick={goToLoginPage}>
                    LOGIN
                </button>
            </ButtonContainer>
            <ImageContainer>
            <img src={MainImage} height="100%" width="100%" alt="Imagem do espaço"></img>
            </ImageContainer>  
            <FooterContainer>
                <h4>
                    Desenvolvido por Gush, 2021
                </h4>    
            </FooterContainer>       
        </MainContainer>
    )
}