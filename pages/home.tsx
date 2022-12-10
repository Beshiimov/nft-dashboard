import {FC} from "react";
import Head from 'next/head'
import {
  Layout,
  Main
} from '../components/styles/sharedstyles'

import {wrapper} from "../redux/store";
import {fetchCoinsChart, fetchCurrencies} from "../redux/slices/currencies/slice";
import Currencies from "../components/home/Currencies";
import Exchange from "../components/home/Exchange";
import Nav from "../components/layouts/Nav";


const Home:FC = ():JSX.Element => {

  return (
    <>
      <Head>
        <title>NFT Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Nav/>
        <Main>
          <Currencies />
        </Main>
        <Exchange />
      </Layout>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  await store.dispatch(fetchCurrencies())
  await store.dispatch(fetchCoinsChart())
  return {props: {}}
});

export default Home