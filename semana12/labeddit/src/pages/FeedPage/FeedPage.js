import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import { goToPosts } from '../../routes/coordinator'
import Loading from '../../components/Loading/Loading'
import up from '../../img/arrow_up.png'
import down from '../../img/arrow_down.png'
import bin from '../../img/trash_bin.png'
import FeedForm from './FeedForm'
import { FeedContainer, PostContainer, PostVotesContainer } from './styled'

const FeedPage = () => {
    useProtectedPage()

    const history = useHistory()
    const [feed, setFeed] = useState([])

    useEffect(() => {
        axios.get(`${baseUrl}/posts`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setFeed(response.data)
            })
            .catch(() => {
                alert("Não foi possível carregar o fedd")
            })
    }, [])

    const onClickPostsDetails = (id) => {
        goToPosts(history, id)
    }

    const createPostVote = (direction, id) => {
        const body = {
            direction: direction
        }
        axios.post(`${baseUrl}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => {
                axios.get(`${baseUrl}/posts`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                })
                    .then((response) => {
                        setFeed(response.data)
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
        createPostVote(1, id)
    }

    const changePostVote = (direction, id) => {
        const body = {
            direction: direction
        }
        axios.put(`${baseUrl}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => {
                axios.get(`${baseUrl}/posts`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                })
                    .then((response) => {
                        setFeed(response.data)
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
        changePostVote(-1, id)
    }

    const deletePostVote = (id) => {
        axios.delete(`${baseUrl}/posts/${id}/votes`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
                console.log(response)
                axios.get(`${baseUrl}/posts`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                })
                    .then((response) => {
                        setFeed(response.data)
                    })
                    .catch((err) => {
                        console.log(err.response)
                    })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    const feedPosts = feed.map((post) => {
        console.log(feed)
        return (
            <PostContainer>
                <p key={post.id}>
                    <strong>{post.title}</strong> by <strong>{post.username}</strong> on <strong>{post.createdAt.split('T')[0].split('-')[2] + '/' + post.createdAt.split('T')[0].split('-')[1] + '/' + post.createdAt.split('T')[0].split('-')[0]}</strong> at <strong>{post.createdAt.split('T')[1].split('.')[0]}</strong>(GMT)
                </p>
                <span onClick={() => onClickPostsDetails(post.id)}>{post.body}</span>
                <div>
                    <PostVotesContainer>
                        <img
                            src={up}
                            alt={"Seta para cima"}
                            onClick={() => like(post.id)}
                        />
                        {post.voteSum === null ? 0 : post.voteSum}
                        <img
                            src={down}
                            alt={"Seta para baixo"}
                            onClick={() => unlike(post.id)}
                        />
                        <img
                            src={bin}
                            alt={"ìcone de lixeira"}
                            onClick={() => deletePostVote(post.id)}
                        />
                    </PostVotesContainer>
                    <span onClick={() => onClickPostsDetails(post.id)}>
                        {post.commentCount === null ? 0 : post.commentCount} comments
                    </span>
                </div>
            </PostContainer>
        )
    })

    return (
        <FeedContainer>
            <FeedForm setFeed={setFeed} />
            {feedPosts.length > 0 ? feedPosts : <Loading />}
        </FeedContainer>
    )
}

export default FeedPage