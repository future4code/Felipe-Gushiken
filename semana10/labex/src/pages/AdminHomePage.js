import {React, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export const AdminHomePage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToTripsDetailsPage = () => {
        history.push("/admin/trips/:id")
    }

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token === null) {
            history.push("/login")
        }
    }, [])


    return (
        <div>
            Lista de Viagens
            <button onClick={goBack}>
                VOLTAR
            </button>
            <p onClick={goToTripsDetailsPage}>DETALHES DA VIAGEM</p>
            <button onClick={goToCreateTripPage}>
                CRIAR VIAGEM
            </button>
        </div>
    )
}