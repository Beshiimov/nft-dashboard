import styled from "styled-components";
import {adaptiveValue} from "./px2vw";

const ExchangeContainer = styled.div`
  grid-area: exchanger;
    /*${adaptiveValue('height', 90, 120, 1)}*/

`



export {ExchangeContainer}