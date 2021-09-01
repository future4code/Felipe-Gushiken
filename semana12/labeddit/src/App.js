import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Router from './routes/Router'
import theme from './constants/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
