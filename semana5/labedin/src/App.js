import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemProfile from './components/img/photo_manchester.jpg';
import LogoManchesterCity from './components/img/manchester_city_logo.png'
import Bierkeller from './components/img/bierkeller-logo.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno'
import LogoEmail from './components/img/email-logo.jpg'
import LogoEndereco from './components/img/adress-logo.png'
import styled from 'styled-components'

const dadosPessoaisAzul = styled.h2`
  color: lightskyblue;
  text-align: center;
  `


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <dadosPessoaisAzul>Dados pessoais</dadosPessoaisAzul>
        <CardGrande 
          imagem={ImagemProfile}
          nome="Felipe Gushiken" 
          descricao="Oi, eu sou o Felipe. Sou aluno da Labenu. Adoro enviar e-mails na sexta-feira e esperar o Astrodev responder só para ler o feedback dele."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
        imagem1={LogoEmail}
        email="e-mail: felipegushiken@mcfc.co.uk"
        imagem2={LogoEndereco}
        endereco="Endereço: Ashton New Road"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={LogoManchesterCity}
          nome="MANCHESTER CITY FOOTBALL CLUB" 
          descricao="Torcedor semi-profissional" 
        />
        
        <CardGrande 
          imagem={Bierkeller}
          nome="BIERKELLER" 
          descricao="Degustador de cervejas profissional" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
