import {createContext, FC, useState} from "react";
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import GlobalStyle from '../components/styles/globalstyles'
import Header from "../components/layouts/Header";
import {Provider} from "react-redux";
import {wrapper} from "../redux/store";

const light: DefaultTheme = {
  colors: {
    primary: '#000',
    secondary: 'saddlebrown',
    third: 'rgba(0,0,0,0.3)',
    background: '#f0f8ff',
    backgroundBody: '#e6f3ff',
  },
}
const dark: DefaultTheme = {
  colors: {
    primary: '#eeeeee',
    secondary: 'rgba(246,209,185,0.75)',
    third: 'rgba(161,161,161,0.2)',
    background: '#101010',
    backgroundBody: '#000000',
  },
}

export const LightThemeContext = createContext(null);

const App:FC<AppProps> = ({ Component, pageProps }):JSX.Element => {
  const [lightTheme, setLightTheme] = useState('true')
  const {store, props} = wrapper.useWrappedStore(pageProps);

  return (
    <>
      <LightThemeContext.Provider value={{lightTheme, setLightTheme}}>
        <ThemeProvider theme={lightTheme === 'false' ? dark : light}>
          <GlobalStyle />
          <Provider store={store}>
          <Header/>
          <Component {...props} />
          </Provider>
        </ThemeProvider>
      </LightThemeContext.Provider>
    </>
  )
}

export default App