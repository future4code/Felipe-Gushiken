import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const RecipesListPage = () => {
    useProtectedPage()
    return (
        <div>
            Recipes List Page
        </div>
    )
}

export default RecipesListPage