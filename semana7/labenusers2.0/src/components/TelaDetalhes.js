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
                console.log(resposta.data)
            })
            .catch((erro) => {
                // alert(erro.response.data)
                console.log(erro.response)
            })
    }

    render() {
        

        return (
            <div>
                <h1>LABENUSERS</h1>
                {detalhesUsuarios}
                <button onClick={this.props.irParaCadastro}>INÍCIO</button>
                <button onClick={this.props.irParaLista}>LISTA</button>
                <p>In progress</p>
            </div>
        )
    }
}

export default TelaDetalhes;