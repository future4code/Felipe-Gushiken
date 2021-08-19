import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import MainImage from '../img/homepage_img01.jpg'

const MainContainer = styled.div`
    width: auto;
    height: 95vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(240,151,153,1) 0%, rgba(43,22,55,1) 100%, rgba(252,176,69,1) 100%);
    border: 5px solid #302038;
    color: #302038;
`

const HeaderContainer = styled.header`
    text-align: center;
    font-family: 'Train One', cursive;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
`

const ImageContainer = styled.div`
    
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