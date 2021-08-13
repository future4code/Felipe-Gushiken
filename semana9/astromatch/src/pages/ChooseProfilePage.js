import React from "react";
import CardProfile from "./CardProfile";
import styled from "styled-components";

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
    display: flex;
    margin: 0 auto;
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
`;

function ChooseProfilePage(props) {
    return (
        <div>
            <HeaderContainer>
                <h1>ASTROMATCH</h1>
                <img
                    src="https://img.icons8.com/fluency/48/000000/two-hearts.png"
                    alt="Dois corações"
                    onClick={props.mudarPagina}
                />
            </HeaderContainer>
            <CardProfile />
        </div>
    );
}

export default ChooseProfilePage;
