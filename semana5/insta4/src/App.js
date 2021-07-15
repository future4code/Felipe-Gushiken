import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "Felipe",
        fotoUsuario: "https://picsum.photos/400/400?a=8",
        fotoPost: "https://picsum.photos/400/400?a=8"
      },
      {
        nomeUsuario: "Vinícius",
        fotoUsuario: "https://picsum.photos/400/400?a=1",
        fotoPost: "https://picsum.photos/400/400?a=3"
      },
      {
        nomeUsuario: "Hugo",
        fotoUsuario: "https://picsum.photos/400/400?a=4",
        fotoPost: "https://picsum.photos/400/400?a=5"
      }
    ]
  }

  render() {
    return (
      <MainContainer>
        {
        this.state.posts.map((post) => {
            return (
              <Post
                nomeUsuario={post.nomeUsuario}
                fotoUsuario={post.fotoUsuario}
                fotoPost={post.fotoPost}
              />
            )
          })
        }
      </MainContainer>
    )
  }
}

export default App;
