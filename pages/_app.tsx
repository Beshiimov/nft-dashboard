import {FC, useEffect, useState} from "react";
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import GlobalStyle from '../components/styles/globalstyles'
import {Layout} from "../components/styles/sharedstyles";
import Nav from "../components/layouts/Nav";
import Header from "../components/layouts/Header";

const light: DefaultTheme = {
  colors: {
    primary: '#000',
    secondary: 'rgba(246,209,185,0.75)',
    third: 'rgba(0,0,0,0.5)',
    background: '#f0f8ff',
    backgroundBody: '#e6f3ff',
  },
}
const dark: DefaultTheme = {
  colors: {
    primary: '#eeeeee',
    secondary: 'rgba(255,255,255,0.05)',
    third: 'rgba(255,255,255,0.48)',
    background: '#181818',
    backgroundBody: '#0e0e0e',
  },
}

const App:FC<AppProps> = ({ Component, pageProps }):JSX.Element => {
  const [lightTheme, setLightTheme] = useState('true')

  useEffect(() => {
    if ((!localStorage.lightTheme) && (localStorage.lightTheme !== 'true' || 'false')) {
      localStorage.setItem('lightTheme', 'false')
    }
    setLightTheme(localStorage.getItem('lightTheme'))
  }, [])

  const changeTheme = () => {
    const toggled = lightTheme === 'true' ? 'false' : 'true'
    localStorage.setItem('lightTheme', toggled)
    setLightTheme(toggled)
  }

  return (
    <>
      <ThemeProvider theme={lightTheme === 'false' ? dark : light}>
        <GlobalStyle />
        <Layout>
          <Header/>
          <Nav changeTheme={changeTheme}/>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App