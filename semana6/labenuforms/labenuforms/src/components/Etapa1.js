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

class Etapa1 extends React.Component {
    render() {
        return (
            <CentralizaFomrulario>
                <h2>
                    ETAPA 1 - DADOS GERAIS
                </h2>
                <h4>
                    1. Qual o seu nome?
                </h4>
                <input></input>
                <h4>
                    2. Qual sua idade?
                </h4>
                <input type="Number"></input>
                <h4>
                    3. Qual seu e-mail?
                </h4>
                <input></input>
                <h4>
                    4. Qual a sua escolaridade?
                </h4>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
            </CentralizaFomrulario>
        )
    }
}

export default Etapa1