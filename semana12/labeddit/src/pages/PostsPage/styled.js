import styled from 'styled-components'

export const CommentsContainer = styled.div`
    display: grid;
    border: 1px solid black;
    width: 70vw;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 15px;
    box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);

    p{
        text-align: center;
        padding-bottom: 5px;
        border-bottom: 1px solid black;
    }

    span{
        padding: 10px;
    }
`
export const MessageContainer = styled.p`
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
`