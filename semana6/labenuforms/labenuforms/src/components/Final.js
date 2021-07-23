import React from 'react'
import styled from 'styled-components'

const CentralizaFomrulario = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

class Final extends React.Component {
    render(){
        return (
            <CentralizaFomrulario>
                <h2>
                    AS PERGUNTAS ACABARAM!
                </h2>
                <h4>
                    Muito obrigado por ter reservado um tempo para responder às perguntas!
                </h4>
                <h4>
                    Entraremos em contato!
                </h4>
            </CentralizaFomrulario>
        )
    }
}

export default Final