import React from 'react'
import axios from 'axios'

class TelaDetalhes extends React.Component {
    state = {
        
    }

    componentDidMount() {
        this.mostrarDetalhes()
    }


    mostrarDetalhes = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.get(url, {
            headers: {
                Authorization: "felipe-gushiken-lovelace"
            }
        })
            .then((resposta) => {
                alert("Olá")
                console.log(resposta.data)
            })
            .catch((erro) => {
                // alert(erro.response.data)
                console.log(erro.response)
            })
    }

    render() {
        const detalhesUsuario = this.state.detalhesUsuario.map((usuario) => {
            return (
                <div key={usuario.id}>
                    {usuario.id}
                    {usuario.name}
                    {usuario.email}
                    <button onClick={() => this.mostrarDetalhes(usuario.id)}>DETALHES</button>
                </div>
            )
        })
        return (
            <div>
                <h1>LABENUSERS</h1>
                <div>{detalhesUsuario}</div>
                <p>Oláááa</p>
            </div>
        )
    }
}

export default TelaDetalhes;