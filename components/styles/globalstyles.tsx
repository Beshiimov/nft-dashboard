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
    overflow-x: hidden;
    background-color: ${({theme}) => theme.colors.backgroundBody};
  }
  
  body, input, button, a {
    ${adaptiveValue('font-size', 14, 20, 1)}
    font-family: ${poppins.style.fontFamily}, Sans-Serif;
    font-weight: 400;
    transition: color .3s ease;
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
  }
  
  h1 {
    ${adaptiveValue('font-size', 20, 28, 1)}
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
  
  img {
  }
  
  input {
    color: ${({theme}) => theme.colors.primary};
    cursor: auto;
  }
`

export default GlobalStyle
