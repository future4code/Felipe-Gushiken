import React from "react";
import axios from "axios";
import styled from "styled-components";
import Pokemon from './img/pokemon01.png'

const MainContainer = styled.div`
  background: rgb(180,58,60);
  background: linear-gradient(90deg, rgba(180,58,60,1) 0%, rgba(238,113,111,1) 31%, rgba(252,176,69,1) 100%);
  height: 97vh;
  display: flex;
  flex-direction: column;

select{
  margin: 30px;
  width: 200px;
  align-self: center;
}

img{
  width: 200px;
  align-self: center;
}
`

class App extends React.Component {
  state = {
    pokemon: [],
    picture: ""
  }

  componentDidMount() {
    this.getPokemon()
  }

  getPokemon = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    this.setState({ pokemon: response.data.results })
  }

  getPokePic = async (event) => {
    const url = event.target.value
    const response = await axios.get(url)
    console.log(response)
    this.setState({ picture: response.data.sprites.front_default })
  }

  render() {
    const pokeList = this.state.pokemon.map((each) => {
      return (
        <option key={each.name} value={each.url}>
          {each.name}
        </option>
      )
    })
    return (
      <MainContainer>
        <img src={Pokemon} alt="imagem do pokemon"></img>
        <select onChange={this.getPokePic}>
          <option>ESCOLHA UM POKEMON</option>
          {pokeList}
        </select>
        {this.state.picture &&
          <img src={this.state.picture} alt="imagem do pokemon"></img>
        }
      </MainContainer>
    )
  }
}

export default App;