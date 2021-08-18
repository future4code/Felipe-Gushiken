import React from 'react'
import {useHistory} from 'react-router-dom'

export const CreateTripPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            CRIAR VIAGEM
            <button onClick={goBack}>
                VOLTAR
            </button>
        </div>
    )
}