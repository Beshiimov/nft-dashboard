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
  console.log(data)
  const items = <CurrenciesItem>
        <Title>
          <Image src={btc} height={25} width={25} alt='bitcoin' />
          <span>Bitcoin (24h)</span>
        </Title>
        <Currency>$32,454.44</Currency>
      </CurrenciesItem>

  return (
    <CurrenciesContainer>
      {items}
    </CurrenciesContainer>
  );
};



export default Currencies;
