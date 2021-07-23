import React from 'react'
import styled from 'styled-components'

const CentralizaFomrulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

input{
    width: 15vw;
}
`

class Etapa2 extends React.Component {
    render() {
        return (
            <CentralizaFomrulario>
                <h2>
                    ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR
                </h2>
                <h4>
                    5. Qual curso?
                </h4>
                <input></input>
                <h4>
                    6. Qual a unidade de ensino?
                </h4>
                <input></input>
            </CentralizaFomrulario>
        )

    }
}

export default Etapa2