import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MainContainer, CardContainer, DisplayContainer } from './styles'

function App() {

  const [cards, setCards] = useState([])
  const [imagesUrl, setImagesUrl] = useState("")
  const [imageBackCard, setImageBackCard] = useState("")
  const [flipCard, setFlipCards] = useState(false)

  const getAllCards = () => {
    axios.get("tarot.json", {
      headers: {
        Accept: 'application/json, text/plain, */*'
      }
    })
      .then((response) => {
        // console.log(response.data)
        setCards(response.data.cards)
        setImagesUrl(response.data.imagesUrl)
        setImageBackCard(response.data.imageBackCard)
      })
      .catch((err) => {
        // console.log(err.response)
      })
  }

  useEffect(() => {
    getAllCards()
  }, [])

  const showCards = cards && cards.map((card) => {
    return (
      <CardContainer>
        <img src={`${imagesUrl}${card.image}`} alt={"Imagem da carta"} />
      </CardContainer>
    )
  })

  const hideCards = cards && cards.map((card) => {
    return (
      <CardContainer>
        <img src={`${imageBackCard}`} alt={"Imagem da carta"} />
      </CardContainer>
    )
  })

  const shuffleAndFlipCards = () => {
    setFlipCards(!flipCard)
    cards.sort((a, b) => 0.5 - Math.random())
  }

  console.log(cards);

  return (
    <MainContainer>
      <h1>The Illuminated Tarot</h1>
      <button onClick={() => shuffleAndFlipCards()}>DISCOVER YOUR DESTINY</button>
      <DisplayContainer>
        {flipCard ? showCards : hideCards}
      </DisplayContainer>
    </MainContainer>
  );
}

export default App;
