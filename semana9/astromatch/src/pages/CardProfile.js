import axios from "axios";
import React from "react";
import { baseUrl } from "../constants";
import { useState, useEffect } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-rows: 10fr 1fr 1fr auto auto;
  margin: 0 auto;
  height: 85vh;
  width: 22vw;
  background: linear-gradient(
    90deg,
    rgba(240, 151, 153, 1) 0%,
    rgba(240, 144, 144, 1) 100%,
    rgba(252, 176, 69, 1) 100%
  );

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: grid;
    height: 85vh;
    margin: 0 auto;
    width: 97vw;
    }
`;
const ImageContainer = styled.div`
  border: 1px solid black;
  display: grid;
  justify-content: center;
  grid-row: 1/ 3;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    margin: 0 auto;
    height: 100%;
    width: 97vw;
    }

  img {
    height: 100%;
    max-width: 100%;
  }
`;
const InfoContainer = styled.div`
  font-family: "Patrick Hand", cursive;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    position: sticky;
    margin: 0 auto;
    width: 97vw;
    }

  p:nth-child(1) {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 29px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
const BioContainer = styled.div`
  font-family: "Patrick Hand", cursive;
  margin-left: 5px;
  font-size: 18px;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    margin: 0 auto;
    width: 97vw;
    }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    margin: 10px auto;
    width: 97vw;
    }

  img {
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    :hover {
        transform: scale(1.2);
    }
  }
`;
const ClearContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    margin-top: 0;
    height: 50px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    :hover {
        transform: scale(1.1);
    }
  }
`;

function CardProfile() {
    const [person, setPerson] = useState({});

    const getProfileToChoose = () => {
        axios
            .get(`${baseUrl}/felipe/person`)
            .then((response) => {
                setPerson(response.data.profile);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const choosePerson = (choice) => {
        const body = {
            id: person.id,
            choice: choice,
        };

        axios
            .post(`${baseUrl}/felipe/choose-person`, body)
            .then((response) => {
                getProfileToChoose();
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    const clear = () => {
        const body = {
            id: person.id,
        };

        axios
            .put(`${baseUrl}/felipe/clear`, body)
            .then((response) => {
                getProfileToChoose();
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    const likePerson = () => {
        choosePerson(true);
    };

    const unlikePerson = () => {
        choosePerson(false);
    };

    useEffect(() => {
        getProfileToChoose();
    }, []);

    return (
        <div>
            <CardContainer>
                <ImageContainer>
                    <img src={person.photo} alt="Imagem do usuário" />
                </ImageContainer>
                <InfoContainer>
                    <p>
                        {person.name}, {person.age}
                    </p>
                </InfoContainer>
                <BioContainer>{person.bio}</BioContainer>
                <ButtonsContainer>
                    <img
                        src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"
                        alt="Ícone de X"
                        onClick={unlikePerson}
                    />
                    <img
                        src="https://img.icons8.com/dusk/64/000000/like.png"
                        alt="Ícone de coração"
                        onClick={likePerson}
                    />
                </ButtonsContainer>
                <ClearContainer>
                    <img src="https://img.icons8.com/cotton/64/000000/erase.png" alt="Ícone de apagar" onClick={() => clear()} />
                </ClearContainer>
            </CardContainer>
        </div>
    );
}

export default CardProfile;
