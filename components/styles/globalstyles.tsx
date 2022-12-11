import { createGlobalStyle } from 'styled-components'
import { Poppins } from '@next/font/google'

import {adaptiveValue} from "./px2vw";
const poppins = Poppins({weight: ['400', '600', '800'], subsets: ['latin']})

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({theme}) => theme.colors.primary};
    padding: 0;
    margin: 0;
    background-color: ${({theme}) => theme.colors.backgroundBody};
    min-height: 100vh;
  }

  body, input, button, a {
    ${adaptiveValue('font-size', 14, 20, 1)}
    font-family: ${poppins.style.fontFamily}, Sans-Serif;
    font-weight: 400;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  button, input {
    outline: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    overflow-y: hidden;
  }

  h1 {
    ${adaptiveValue('font-size', 20, 28, 1)};
  }
  
  h3 {
    font-weight: 600;
    ${adaptiveValue('font-size', 16, 22, 1)};
    margin: 0;
  }

  h4 {
    font-weight: 400;
    margin: 0;
    ${adaptiveValue('font-size', 14, 18, 1)};
    ${adaptiveValue('line-height', 26, 32, 1)};
  }

  a, button {
    color: ${({theme}) => theme.colors.primary};
    &:hover {
      opacity: .7;
    }
    &:active {
      opacity: .5;
    }
  }

  li {
      list-style: none;
  }
  
  p {
    ${adaptiveValue('font-size', 12, 18, 1)};
    margin: 0;
  }

  input {
    color: ${({theme}) => theme.colors.primary};
    cursor: auto;
  }

  div, body {
    transition: background-color .3s ease;
  }
  
  p, span, h1, h2, h3, h4, a, button {
    transition-property: color, opacity;
    transition-duration: .3s;
    transition-timing-function: ease;
  }
`

export const sizes = {
  mobileS: '320px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
}

export default GlobalStyle
