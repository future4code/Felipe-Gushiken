import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const RecipeDetailsPage = () => {
    useProtectedPage()
    return (
        <div>
            Recipe Details Page
        </div>
    )
}

export default RecipeDetailsPage