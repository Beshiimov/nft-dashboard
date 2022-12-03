import {FC, useEffect} from "react";
import Head from 'next/head'
import {
    Main,
} from '../../components/styles/sharedstyles'

import {RootState, useAppDispatch, wrapper} from "../../redux/store";
import {fetchCurrencies} from "../../redux/slices/currencies/slice";
import { useSelector} from "react-redux";
import Currencies from "./Currencies";
import {Display} from "../../types/fetch";


const Home:FC = ():JSX.Element => {
  const dispatch = useAppDispatch()
  const data = useSelector<RootState, Display>(state => state.currenciesSlice.data.DISPLAY)

  useEffect(() => {
    const int = setInterval(() => {
      const fetchInterval = () => {
        dispatch(fetchCurrencies())
      }
      fetchInterval()
    },15000)
    return () => clearInterval(int)
  }, [])

  return (
    <>
      <Head>
        <title>NFT Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Currencies data={data}/>
      </Main>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  await store.dispatch(fetchCurrencies())
  return {props: {}}
});


export default Home