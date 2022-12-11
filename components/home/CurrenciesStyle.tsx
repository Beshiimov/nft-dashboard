import styled from "styled-components";
import {adaptiveValue} from "../styles/px2vw";
import Link from "next/link";
import {sizes} from '../styles/globalstyles';

const CurrenciesContainer = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: .5rem;
  ${adaptiveValue("margin-bottom", 15, 22, 1)};
  
  @media (max-width: ${sizes.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`
const CurrenciesItem = styled(Link)`
  ${adaptiveValue('height', 65, 120, 1)}
  position: relative;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.background};
  overflow: hidden;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  &:last-child {
    margin-right: 0;
  }
`
const Title = styled.div`
  display: flex;
  align-items: center;
  ${adaptiveValue('margin-bottom', 0, 10, 1)};
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