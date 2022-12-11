import Link from "next/link";
import Image from "next/image"
import styled from 'styled-components'

import {FC} from "react";
import {adaptiveValue} from '../styles/px2vw';



const NavContainer = styled.div`
  position: fixed;
  z-index: 99;
  left: 50%;
  ${adaptiveValue('bottom', 5, 10, 1)}
  transform: translateX(-50%);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  mix-blend-mode: difference;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${({theme}) => theme.colors.primary};
  border: 3px solid ${({theme}) => theme.colors.background};
`

const Column = styled.div`
  display: flex;
  align-items: center;
  & a {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    margin: 5px;
    height: auto;

    &:first-child p {
      border-bottom: 3px solid ${({theme}) => theme.colors.secondary};
    }
    p {
      border-bottom: 3px solid transparent;
      color: #fff;
      font-weight: 600;
    }
  }
`


const Nav:FC = ():JSX.Element => {

  return (
    <NavContainer>
      <Column>
        <Link href="/home">
          <p>Home</p>
        </Link>
        <Link href="/market">
          <p>Market</p>
        </Link>
      </Column>
    </NavContainer>
  );
};

export default Nav;
