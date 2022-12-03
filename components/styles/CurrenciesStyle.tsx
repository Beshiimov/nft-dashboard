import styled from "styled-components";
import {adaptiveValue} from "./px2vw";
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
  margin-right: 8px;
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


export {CurrenciesContainer, CurrenciesItem, Title, Currency}