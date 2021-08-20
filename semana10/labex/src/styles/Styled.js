import styled from 'styled-components'

export const MainContainer = styled.div`
    width: auto;
    height: 95.9vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(240,151,153,1) 0%, rgba(43,22,55,1) 100%, rgba(252,176,69,1) 100%);
    border: 5px solid #302038;
    color: #fcd4d4;

    h1{
        font-size: 2.1em;
    }
`
export const HeaderContainer = styled.header`
    text-align: center;
    font-family: 'Train One', cursive;
    color: #302038;
    
    h1{
        cursor: pointer;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;

    button{
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    button:hover{
        transform: scale(1.05);
    }
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
    margin-bottom: 100px;
    
    input{
        margin-top: 10px;
        width: 30%;
    }

    input:nth-child(4){
        height: 90px;
    }

    select{
        margin-top: 10px;
        width: 30.5%;
    }

    button{
        margin-top: 10px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    button:hover{
        transform: scale(1.1);
    }
`
export const LoginContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    
    input{
        margin-top: 10px;
        width: 20%;
        height: 40%;
    }

    button{
        margin-top: 10px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    button:hover{
        transform: scale(1.1);
    }
`
export const ListTripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #302038;
    border-radius: 2%;
    width: 25vw;
    margin: 20px auto 10px auto;
    font-family: 'Overlock SC', cursive;

    h3{
        cursor: pointer;
    }

    p{
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
    }

    img{
        height: 50px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    img:hover{
        transform: scale(1.1);
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Overlock SC', cursive;
    margin: 10px auto 0 auto;
    border: 2px solid #302038;
    width: 30vw;
`

export const DetailsBox = styled.div`
    text-align: center;
`