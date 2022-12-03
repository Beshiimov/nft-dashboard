import styled from "styled-components";
import Image from "next/image"

import {adaptiveValue} from "../../components/styles/px2vw";
import {CoinType} from "../../types/fetch";
import {FC} from "react";
import Link from "next/link";

const CurrenciesContainer = styled.div`
  ${adaptiveValue('height', 90, 120, 1)};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: center;
`
const CurrenciesItem = styled(Link)`
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
  position: relative;
  & i {
    position: absolute;
    top: 0;
    margin-left: 5px;
    ${adaptiveValue('font-size', 10, 14, 1)};
  }
`


const Currencies:FC<CoinType> = ({data}):JSX.Element => {
  let items = []

  for (let i = 0; i < Object.keys(data).length; i++) {
    items.push(<CurrenciesItem key={i} href={"/currency/" + Object.keys(data)[i]}>
      <Title>
        <Image src={'https://www.cryptocompare.com' + Object.values(data)[i].USD.IMAGEURL} height={25} width={25} alt='bitcoin' />
        <span>{Object.keys(data)[i]} (24h)</span>
      </Title>
      <Currency>
        {Object.values(data)[i].USD.PRICE}
        {Object.values(data)[i].USD.CHANGEPCT24HOUR[0] === '-' ?
          <i style={{color: "rgba(255,0,0,0.77)"}}>
            {Object.values(data)[i].USD.CHANGEPCT24HOUR}%
          </i> :
          <i style={{color: "#28d01a"}}>
            {Object.values(data)[i].USD.CHANGEPCT24HOUR}%
          </i>
        }
      </Currency>
    </CurrenciesItem>)
  }

  return (
    <CurrenciesContainer>
      {items}
    </CurrenciesContainer>
  );
};



export default Currencies;
