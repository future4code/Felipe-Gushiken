import React from 'react'
import { baseUrl } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { FeedContainer, PostContainer, PostVotesContainer } from './styled'
import FeedForm from './FeedForm'
import up from '../../img/arrow_up.png'
import down from '../../img/arrow_down.png'
import useForm from '../../hooks/useForm'
import { createPostVote } from '../../services/posts'
import { goToPosts } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const FeedPage = () => {
    useProtectedPage()

    const history = useHistory()
    const [form] = useForm({ direction: 1 })

    const onSubmitVote = (event) => {
        event.preventDefault()
        createPostVote(form)
    }

    const [feed, setFeed] = useRequestData([], `${baseUrl}/posts`)
    console.log(feed)

    const onClickPostsDetails = (id) => {
        goToPosts(history, id)
    }

    const feedPosts = feed.map((post) => {
        return (
            <PostContainer>
                <p key={post.id}>by <strong>{post.username}</strong></p>
                <span onClick={() => onClickPostsDetails(post.id)}>{post.body}</span>
                <div>
                    <PostVotesContainer>
                        <img
                            src={up}
                            alt={"Seta para cima"}
                            onClick={onSubmitVote}
                        />
                        {post.userVote}
                        <img
                            src={down}
                            alt={"Seta para baixo"}
                            onClick={""}
                        />
                    </PostVotesContainer>
                    <span onClick={() => onClickPostsDetails(post.id)}>{post.commentCount} comments</span>
                </div>
            </PostContainer>
        )
    })

    return (
        <FeedContainer>
            <h1>Feed</h1>
            <FeedForm />
            {feedPosts}
        </FeedContainer>
    )
}

export default FeedPage