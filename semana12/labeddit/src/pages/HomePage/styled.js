import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    body{
        background: rgb(250,109,112);
        background: linear-gradient(90deg, rgba(250,109,112,1) 25%, rgba(252,72,69,1) 49%, rgba(227,29,35,1) 100%);
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;

        @keyframes gradient {
            0% {
            background-position: 0% 50%;
            }

            50% {
            background-position: 100% 50%;
            }

            100% {
            background-position: 0% 50%;
            }
        }
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 25vw;
    color: #f0f0f0;

    h1{
        font-size: 5em;
        text-shadow: 3px 3px 4px rgba(150, 150, 150, 1);
    }

    h2{
        font-size: 2em;
        text-shadow: rgba(255,255,255,.1) -1px -1px 1px,rgba(0,0,0,.5) 1px 1px 1px;
    }

    h3{
        font-size: 1.8em;
        text-shadow: rgba(255,255,255,.1) -1px -1px 1px,rgba(0,0,0,.5) 1px 1px 1px;
    }

    @media screen and (min-width: 300px) and (max-width: 900px) {
        overflow: hidden;

        h1{
            font-size: 3.1em;
        }
    }
`