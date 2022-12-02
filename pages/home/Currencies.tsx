import styled from "styled-components";
import Image from "next/image"

import {adaptiveValue} from "../../components/styles/px2vw";
import btc from "/public/icons/bitcoin.svg"

const CurrenciesContainer = styled.div`
  ${adaptiveValue('height', 90, 120, 1)};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: center;
`
const CurrenciesItem = styled.div`
  height: 100%;
  ${adaptiveValue('min-width', 200, 250, 1)};
  border: 1px solid ${({theme}) => theme.colors.secondary};
  border-radius: 12px;
  padding: 15px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5px;
  background-color: ${({theme}) => theme.colors.background};
`
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  & img {
    margin-right: 10px;
  }
  span {
    opacity: .8;
  }
`
const Currency = styled.p`
  margin: 0 ;
  font-weight: 600;
  ${adaptiveValue('font-size', 20, 26, 1)};
`


const Currencies = ({data}):JSX.Element => {
  let items = []

  for (let i = 0; i < Object.keys(data).length; i++) {
    items.push(<CurrenciesItem key={i}>
      <Title>
        <Image src={'https://www.cryptocompare.com' + Object.values(data)[i].USD.IMAGEURL} height={25} width={25} alt='bitcoin' />
        <span>{Object.keys(data)[i]} (24h)</span>
      </Title>
      <Currency>{Object.values(data)[i].USD.PRICE}</Currency>
    </CurrenciesItem>)
  }

  return (
    <CurrenciesContainer>
      {items}
    </CurrenciesContainer>
  );
};



export default Currencies;
