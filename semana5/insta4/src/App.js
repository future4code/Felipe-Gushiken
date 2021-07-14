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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Felipe'}
          fotoUsuario={'https://picsum.photos/400/400?a=8'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Vinícius'}
          fotoUsuario={'https://picsum.photos/400/400?a=1'}
          fotoPost={'https://picsum.photos/400/400?a=3'}
        />
        <Post
          nomeUsuario={'Hugo'}
          fotoUsuario={'https://picsum.photos/400/400?a=4'}
          fotoPost={'https://picsum.photos/400/400?a=5'}
        />
      </MainContainer>
      
    );
  }
}

export default App;
