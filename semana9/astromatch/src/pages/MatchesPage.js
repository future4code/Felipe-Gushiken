import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { baseUrl } from "../constants";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  width: 22vw;
  height: 10vh;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    rgba(240, 151, 153, 1) 0%,
    rgba(240, 144, 144, 1) 100%,
    rgba(252, 176, 69, 1) 100%
  );

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 97vw;
    }

  h1 {
    font-family: "Patrick Hand", cursive;
  }

  img {
    height: 50px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    :hover {
        transform: scale(1.2);
    }
  }
`

const MatchesContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
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
const MatchesList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 5px;
    font-family: 'Patrick Hand', cursive;
    font-size: 20px;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    margin: 0 auto;
    width: 97vw;
    }

    img{
        height: 50px;
        border-radius: 50%;
        margin-right: 30px;
        transition: all 0.4s ease-in-out;

        :hover {
            transform: scale(1.1);
        }
    }
`

function MatchesPage(props) {
    const [matches, setMatches] = useState([]);

    const getMatches = () => {
        axios
            .get(`${baseUrl}/felipe/matches`)
            .then((response) => {
                setMatches(response.data.matches);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getMatches();
    }, []);

    return (
        <div>
            <HeaderContainer>
                <h1>ASTROMATCH</h1>
                <img
                    src="https://img.icons8.com/bubbles/50/000000/back.png"
                    alt="Ícone de voltar"
                    onClick={props.mudarPagina}
                />
            </HeaderContainer>
            <MatchesContainer>
                {matches.map((user) => {
                    return (
                        <MatchesList>
                            <li key={user.id}></li>
                            <img src={user.photo} alt="Imagem do usuário" />
                            {user.name}
                        </MatchesList>
                    );
                })}
            </MatchesContainer>
        </div>
    );
}

export default MatchesPage;
