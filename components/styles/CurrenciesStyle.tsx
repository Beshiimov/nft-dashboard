import styled from "styled-components";
import {adaptiveValue} from "./px2vw";
import Link from "next/link";

const CurrenciesContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-area: currencies;
  padding: 0 .5rem;
  // ${adaptiveValue("margin-bottom", 10, 15, 1)};
  //justify-content: center;
`
const CurrenciesItem = styled(Link)`
  ${adaptiveValue('height', 75, 120, 1)}
  ${adaptiveValue('min-width', 140, 250, 1)};
  position: relative;
  border-radius: 12px;
  padding: 15px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  margin-right: 8px;
  background-color: ${({theme}) => theme.colors.background};
  overflow: hidden;
  
  &:last-child {
    margin-right: 0;
  }
`
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  & img {
    mix-blend-mode: initial;
    margin-right: 10px;
  }
  span {
    color: ${({theme}) => theme.colors.primary};
    font-weight: 600;
    span {
      opacity: .6;
      ${adaptiveValue('font-size', 6, 10, 1)};
    }
  }
`
const Currency = styled.p`
  margin: 0 ;
  font-weight: 600;
  ${adaptiveValue('font-size', 14, 26, 1)};
  position: relative;
  & i {
    position: absolute;
    top: 0;
    margin-left: 5px;
    ${adaptiveValue('font-size', 10, 14, 1)};
  }
`

const BgChart = styled.div`
  opacity: .4;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & canvas {
    margin: -5px;
  }
`


export {CurrenciesContainer, CurrenciesItem, Title, Currency, BgChart}