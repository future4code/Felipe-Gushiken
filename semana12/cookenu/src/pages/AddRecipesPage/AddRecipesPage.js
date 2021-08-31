import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const AddRecipesPage = () => {
    useProtectedPage()
    return (
        <div>
            Add Recipes Page
        </div>
    )
}

export default AddRecipesPage