import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { baseUrl } from '../../constants/urls'
import PostsForm from './PostsForm'
import { CommentsContainer, MessageContainer, PostVotesContainer } from './styled'
import up from '../../img/arrow_up.png'
import down from '../../img/arrow_down.png'
import axios from 'axios'

const PostsPage = () => {
    useProtectedPage()

    const params = useParams()
    const [comments, setComments] = useRequestData([], `${baseUrl}/posts/${params.id}/comments`)

    console.log(params)

    const changeCommentVote = (direction) => {
        const body = {
            direction: direction
        }

        axios.put(`${baseUrl}/comments/${params.id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
    }

    const likeComment = () => {
        changeCommentVote(-1)
    }

    const showComments = comments.length > 0 ? comments.map((item) => {
        return (
            <CommentsContainer key={item.id}>
                <p>by <strong>{item.username}</strong></p>
                <span>{item.body}</span>
                <PostVotesContainer>
                    <img
                        src={up}
                        alt={"Seta para cima"}
                        onClick={likeComment}
                    />
                    {item.userVote}
                    <img
                        src={down}
                        alt={"Seta para baixo"}
                        onClick={""}
                    />
                </PostVotesContainer>
            </CommentsContainer>
        );
    }) : <MessageContainer>Não há comentários</MessageContainer>;

    return (
        <div>
            <p>{showComments}</p>
            <PostsForm />
        </div>

    )
}

export default PostsPage