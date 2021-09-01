import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostsPage = () => {
    useProtectedPage()
    return (
        <h1>Página de Posts</h1>
    )
}

export default PostsPage