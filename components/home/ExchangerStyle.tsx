import styled, {keyframes} from "styled-components";
import {adaptiveValue} from "../styles/px2vw";

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
  90% {
    opacity: 0;
    height: 0;
    pointer-events: none;
  }
  100% {
    opacity: 0;
  }
`

const openButtonAnimation = keyframes`
  100% {
    opacity: 1;
  }
`
const closeButtonAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }

`

/*---------------------------------*/
const ExchangeContainer = styled.div`
  height: fit-content;
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
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 8px;
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
  height: fit-content;
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
    overflow-y: hidden;
    width: 100%;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-right: 2px solid transparent;
    animation: ${({ open }) =>
            (open === false ? closeButtonAnimation : openButtonAnimation)} .5s ease forwards;;
    transition: all .3s ease;

    &:hover {
      border-right: 2px solid ${({theme}) => theme.colors.secondary};
    }
  }
`


export {ExchangeContainer, Field, Title, CoinList, Button, InputTitle}