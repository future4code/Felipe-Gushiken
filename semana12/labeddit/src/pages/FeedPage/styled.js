import styled from 'styled-components'
import "animate.css"

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`
export const PostContainer = styled.div`
    display: grid;
    border: 3px solid black;
    width: 70vw;
    grid-template-rows: 1fr 1.5fr 0.5fr;
    margin-top: 30px;
    border-radius: 15px;
    box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
    
    span{
        margin-left: 10px;
        cursor: pointer;
    }

    p{
        margin-top: 0;
        border-bottom: 1px solid black;
        text-align: center;
        justify-self: center;
        width: 100%;
    }

    div{
        display: flex;
        justify-content: space-around;
        border-top: 1px solid black;
    }
`
export const SendPostContainer = styled.div`
    display: grid;
    width: 70vw;

    button{
        margin-top: 10px;
    }
`
export const PostVotesContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            margin: 0 20px;
        }

        img:hover{
            cursor: pointer;
            animation: pulse;
            animation-duration: 0.7s;
        }

`