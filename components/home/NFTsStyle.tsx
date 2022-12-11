import styled from 'styled-components';
import {adaptiveValue} from '../styles/px2vw';

const NFTsContainer = styled.div`
  margin-bottom: 1rem;
`

const NftBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: .7rem;
`

const Block = styled.div`
  border: 1px solid ${({theme}) => theme.colors.third};
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 8px;
  padding: .5rem;
  overflow: hidden;
  & img {
    width: 100%;
    height: fit-content;
    border-radius: 6px;
    object-fit: cover;
    transition: all .3s ease;
    margin-bottom: -5px;
    &:hover {
      transform: scale(1.06);
    }
  }
  p {
    margin: 0;
    ${adaptiveValue('font-size', 12, 14, 1)};
    font-weight: 600;
    opacity: .8;
    display: inline-block;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      opacity: .5;
      ${adaptiveValue('font-size', 14, 16, 1)};
    }
    span {
      ${adaptiveValue('font-size', 12, 16, 1)};
      font-weight: 600;
    }
  }
`

export {NFTsContainer, NftBlocks, Block}