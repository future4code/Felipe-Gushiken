import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const FeedPage = () => {
    useProtectedPage()
    return (
        <h1>Página de Feed</h1>
    )
}

export default FeedPage