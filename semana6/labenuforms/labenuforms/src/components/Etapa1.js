import React from 'react'
import styled from 'styled-components'

class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    ETAPA 1 - DADOS GERAIS
                </h2>
                <h4>
                    1. Qual o seu nome?
                </h4>
                <input></input>
                <h4>
                    1. Qual sua idade?
                </h4>
                <input></input>
                <h4>
                    1. Qual seu e-mail?
                </h4>
                <input></input>
                <h4>
                    1. Qual a sua escolaridade?
                </h4>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
            </div>
        )
    }
}

export default Etapa1