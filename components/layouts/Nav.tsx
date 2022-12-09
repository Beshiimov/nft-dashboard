import Link from "next/link";
import Image from "next/image"
import styled from 'styled-components'

import homeImage from "/public/icons/home.svg"
import marketImage from "/public/icons/market.svg"
import {FC} from "react";
import {adaptiveValue} from "../styles/px2vw";



const NavContainer = styled.div`
  position: sticky;
  ${adaptiveValue('top', 49, 68, 1)};
  left: 0;
  height:  calc(100vh - (49px + 20 * ((100vw - 320px) / 1660)));
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  min-height: 400px;
  text-align: center;
  color: ${({theme}) => theme.colors.primary};
  border-right: 1px solid ${({theme}) => theme.colors.primary};
  padding: 0 5px;
  ${adaptiveValue('width', 40, 70, 1)}
`

const Column = styled.div`
  margin-top: -10vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  & a {
    height: auto;
    margin: 8px 0;
    & img {
      filter: invert(${({theme}) => theme.colors.primary === '#000'? 0 : 1});
    }
  }
`


const Nav:FC = ():JSX.Element => {

  return (
    <NavContainer>
      <Column>
        <Link href="/home">
          <Image src={homeImage} alt="Home" height={25} width={25}/>
        </Link>
        <Link href="/market">
          <Image src={marketImage} alt="Index" height={25} width={25}/>
        </Link>
      </Column>
    </NavContainer>
  );
};

export default Nav;
