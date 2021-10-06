import React from 'react'
import { GlobalStyle } from './styled'
import HomePageText from './HomePageText'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const HomePage = () => {
    useUnprotectedPage()
    return (
        <div>
            <GlobalStyle />
            <HomePageText />
        </div>

    )
}

export default HomePage