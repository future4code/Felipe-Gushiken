import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div>
            <div className="container-card-pequeno">
                <img src={props.imagem1} alt="Ícone de e-mail" />
                <p>{props.email}</p>
            </div>
            <div className="container-card-pequeno">
                <img src={props.imagem2} alt="Ícone de endereço" />
                <p>{props.endereco}</p>
            </div>
        </div>
    )
}

export default CardPequeno;