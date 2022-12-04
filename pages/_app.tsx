import {FC, useEffect, useState} from "react";
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import GlobalStyle from '../components/styles/globalstyles'
import {Layout} from "../components/styles/sharedstyles";
import Nav from "../components/layouts/Nav";
import Header from "../components/layouts/Header";
import {Provider} from "react-redux";
import {store, wrapper} from "../redux/store";

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
  const {store, props} = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <ThemeProvider theme={lightTheme === 'false' ? dark : light}>
        <GlobalStyle />
        <Provider store={store}>
          <Layout>
            <Header/>
            <Nav changeTheme={changeTheme}/>
            <Component {...props} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App