import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import MainImage from '../img/homepage_img01.jpg'
import { MainContainer, HeaderContainer, ButtonContainer } from '../styles/Styled'

const ImageContainer = styled.div`
    height: 100%;
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
        </MainContainer>
    )
}