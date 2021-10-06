import styled from 'styled-components'

export const CommentsContainer = styled.div`
    display: grid;
    border: 3px solid black;
    width: 70vw;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 15px;
    box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
    background-color: #F9DBD3;

   :hover{
        background-color: #f5a4a6;
    }

    p{
        text-align: center;
        padding-bottom: 5px;
        border-bottom: 1px solid black;
    }

    span{
        padding: 10px;
    }

    @media screen and (min-width: 300px) and (max-width: 900px) {
	    width: 90vw;
        font-size: 1.3em;
	}
`
export const MessageContainer = styled.p`
    margin-top: 50px;
    font-size: 1.5em;
    text-align: center;
`

export const PostForm = styled.form`
    display: grid;
    justify-items: center;
    margin-bottom: 30px;

    div{
        width: 70vw;
    }
`
export const PostVotesContainer = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-top: 1px solid black;

        img{
            margin: 3px 20px;
        }

        img:hover{
            cursor: pointer;
            animation: pulse;
            animation-duration: 0.7s;
        }
`