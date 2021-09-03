import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import useProtectedPage from '../../hooks/useProtectedPage'
import { baseUrl } from '../../constants/urls'
import up from '../../img/arrow_up.png'
import down from '../../img/arrow_down.png'
import bin from '../../img/trash_bin.png'
import PostsForm from './PostsForm'
import { CommentsContainer, MessageContainer, PostVotesContainer } from './styled'


const PostsPage = () => {
    useProtectedPage()

    const params = useParams()
    console.log(params)
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`${baseUrl}/posts/${params.id}/comments`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setComments(response.data)
            })
            .catch(() => {
                alert("Não foi possível carregar os comentários")
            })
    }, [])

    const createCommentVote = (direction, id) => {
        const body = {
            direction: direction
        }
        axios.post(`${baseUrl}/comments/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => {
                axios.get(`${baseUrl}/posts/${params.id}/comments`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                })
                    .then((response) => {
                        setComments(response.data)
                    })
                    .catch((err) => {
                        console.log(err.response)
                    })
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    const like = (id) => {
        createCommentVote(1, id)
    }

    const changeCommentVote = (direction, id) => {
        const body = {
            direction: direction
        }
        axios.put(`${baseUrl}/comments/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => {
                axios.get(`${baseUrl}/posts/${params.id}/comments`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                })
                    .then((response) => {
                        setComments(response.data)
                    })
                    .catch((err) => {
                        console.log(err.response)
                    })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const unlike = (id) => {
        changeCommentVote(-1, id)
    }

    const deleteCommentVote = (id) => {
        axios.delete(`${baseUrl}/comments/${id}/votes`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
                console.log(response)
                axios.get(`${baseUrl}/posts/${params.id}/comments`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                })
                    .then((response) => {
                        setComments(response.data)
                    })
                    .catch((err) => {
                        console.log(err.response)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const showComments = comments.length > 0 ? comments.map((item) => {
        return (
            <CommentsContainer key={item.id}>
                <span>{item.body} by <strong>{item.username}</strong> on <strong>{item.createdAt.split('T')[0].split('-')[2] + '/' + item.createdAt.split('T')[0].split('-')[1] + '/' + item.createdAt.split('T')[0].split('-')[0]}</strong></span>
                <PostVotesContainer>
                    <img
                        src={up}
                        alt={"Seta para cima"}
                        onClick={() => like(item.id)}
                    />
                    {item.userVote === null ? 0 : item.userVote}
                    <img
                        src={down}
                        alt={"Seta para baixo"}
                        onClick={() => unlike(item.id)}
                    />
                    <img
                        src={bin}
                        alt={"ìcone de lixeira"}
                        onClick={() => deleteCommentVote(item.id)}
                    />
                </PostVotesContainer>
            </CommentsContainer>
        );
    }) : <MessageContainer>There are no comments</MessageContainer>;

    return (
        <div>
            <p>{showComments}</p>
            <PostsForm setComments={setComments} />
        </div>

    )
}

export default PostsPage