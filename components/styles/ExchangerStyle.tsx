import styled, {keyframes} from "styled-components";
import {adaptiveValue} from "./px2vw";

const openAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
  20% {
    opacity: 1;
  }
  100% {
    pointer-events: auto;
    ${adaptiveValue('height', 160, 200, 1)};
  }
`
const closeAnimation = keyframes`
  0% {
    pointer-events: auto;
    opacity: 1;
    ${adaptiveValue('height', 160, 200, 1)};
  }
  80% {
    opacity: 1;
  }
  100% {
    pointer-events: none;
    opacity: 0;
    height: 0;
  }
`

/*---------------------------------*/
const ExchangeContainer = styled.div`
  position: sticky;
  ${adaptiveValue('top', 49, 68, 1)};
  ${adaptiveValue('width', 15, 300, 1)};
  height: fit-content;
  padding: 0.5rem;
  margin-right: 0.5rem;
  line-height: 1rem;
  border-radius: 8px;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 15px;
  
  h3 {
    opacity: .8;
    display: inline-block;
  }
  
  h2 {
    font-weight: 800;
    display: inline-block;
    text-align: right;
  }
`

const InputTitle = styled.div`
  opacity: .6;
  ${adaptiveValue('font-size', 12, 16, 1)}
  ${adaptiveValue('line-height', 16, 22, 1)}
`

const Field = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.background};
  position: relative;
  
  & input {
    padding: 8px 10px;
    height: 100%;
    width: 100%;
    ${adaptiveValue('font-size', 10, 14, 1)};
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance:textfield;
  }
`

const Button = styled.div<{open: boolean}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 25px;
  z-index: 5;
  
  & > img:last-child {
    margin: 3px 10px 0 3px;
    transition: all .5s ease;
    //transform: rotate(180deg);
    transform: rotate(${({ open }) => (open ? "180deg" : 0)});
  }
`

const CoinList = styled.div<{open: boolean}>`
  background-color: ${({theme}) => theme.colors.background};
  position: absolute;
  z-index: 9;
  height: 0;
  width: 150px;
  top: 120%;
  right: 0;
  border-radius: 8px;
  padding: 7px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  animation: ${({ open }) => 
          (open === false ? closeAnimation : openAnimation)} 
  .5s ease forwards;
  transition: all .3s ease;

  & button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-right: 2px solid transparent;
    transition: all .3s ease;
    
    &:hover {
      border-right: 2px solid ${({theme}) => theme.colors.secondary};
    }
  }
`


export {ExchangeContainer, Field, Title, CoinList, Button, InputTitle}