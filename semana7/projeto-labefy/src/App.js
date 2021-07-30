import React from 'react'
import axios from 'axios'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
  headers: {
    Authorization: "felipe-gushiken-lovelace"
  }
}

class App extends React.Component {
  state = {
    playlist: [],
    inputPlaylist: "",
    playlistDetails: []
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  mudarInputPlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value })
  }

  getAllPlaylists = () => {
    axios.get(url, headers)
      .then((resposta) => {
        this.setState({ playlist: resposta.data.result.list })
      })
      .catch((erro) => {
        alert(erro.response.data.message)
      })
  }

  createPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    }

    axios.post(url, body, headers)
      .then((resposta) => {
        alert("Playlist criada!")
        this.setState({ inputPlaylist: "" })
        this.getAllPlaylists()
      })
      .catch((erro) => {
        alert("Não foi possível criar a playlist")
      })
  }

  deletePlaylist = (playlistId) => {

    if (window.confirm("Deseja apagar a playlist?")) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`

      axios.delete(url, headers)
        .then((resposta) => {
          this.getAllPlaylists()
        })
        .catch((erro) => {
          alert("Erro")
          console.log(erro.response.data)
        })
    } else {
        alert("Playlist não apagada")
    }

  }

  getPlaylistTracks = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
    axios.get(url, headers)
      .then((resposta) => {
        this.getAllPlaylists()
        console.log(resposta.data.result)
        this.setState({playlistDetails: resposta.data})
      })
      .catch((erro) => {
        alert("Playlist não encontrada")
      })
  }

  render() {

    const listasDeReproducao = this.state.playlist.map((lista) => {
      return <div key={lista.id}>
        <li>{lista.name}</li>
        <button onClick={() => this.getPlaylistTracks(lista.id)}>DETALHES</button>
        {this.state.playlistDetails.tracks}
        <button onClick={() => this.deletePlaylist(lista.id)}>APAGAR</button>
      </div>
    })

    return (
      <div>
        <h1>LABEFY</h1>
        <div>
          <input
            placeholder="NOME DA PLAYLIST"
            value={this.state.inputPlaylist}
            onChange={this.mudarInputPlaylist}
          />
          <button onClick={this.createPlaylist}>CRIAR PLAYLIST</button>
        </div>
        <hr />
        {listasDeReproducao}
      </div>
    )
  }
}

export default App;