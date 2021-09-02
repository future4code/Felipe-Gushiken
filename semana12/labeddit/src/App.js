import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Router from './routes/Router'
import theme from './constants/theme'

function App() {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Signup")
  const [leftButton, setLeftButton] = useState(token ? null : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
          leftButton={leftButton}
          setLeftButton={setLeftButton}
        />
        <Router
          setRightButtonText={setRightButtonText}
          leftButton={leftButton}
          setLeftButton={setLeftButton}
        />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
