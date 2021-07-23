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

class Etapa3 extends React.Component {
    render(){
        return (
            <CentralizaFomrulario>
                <h2>
                    ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO
                </h2>
                <h4>
                    5. Por que você não terminou um curso de graduação?
                </h4>
                <input></input>
                <h4>
                    6. Você fez algum curso complementar?
                </h4>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
            </CentralizaFomrulario>
        )
    }
}

export default Etapa3