import styled from 'styled-components'

import {adaptiveValue} from './px2vw';
import {sizes} from './globalstyles';

const Layout = styled.main`
  height: 100%;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  max-width: 1980px;
  margin: 0 auto;
`

const Main = styled.main`
  flex: 1 1 auto;
  padding: 0 .5rem;
  ${adaptiveValue(' margin-top', 2, 10, 1)};
`

const ExchangeAndWallet = styled.div`
  ${adaptiveValue('min-width', 250, 300, 1)};
  border-radius: 8px;
  position: sticky;
  ${adaptiveValue('top', 49, 68, 1)};
  right: 0;
  height: fit-content;
	display: flex;
	flex-direction: column;
  padding: 0.5rem;
  margin-right: 0.5rem;
  
  @media (max-width: ${sizes.laptop}) {
    display: none;
  }
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`



export { Layout, Title, Main, ExchangeAndWallet }
