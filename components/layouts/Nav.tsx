import Link from "next/link";
import Image from "next/image"
import styled from 'styled-components'

import homeImage from "/public/icons/home.svg"
import marketImage from "/public/icons/market.svg"
import moon from "/public/icons/moon.svg"
import {FC} from "react";
import {adaptiveValue} from "../styles/px2vw";

type NavProps = {
  changeTheme: () => void
}

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  grid-area: nav;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: fit-content;
  min-height: 400px;
  text-align: center;
  color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.background};
  border-right: 1px solid ${({theme}) => theme.colors.secondary};
  ${adaptiveValue('width', 40, 70, 1)}
`

const Column = styled.div`
  margin-top: 20vh;
  display: flex;
  justify-content: center;
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

const Button = styled.button`
  padding: 20px 0;
`

const Nav:FC<NavProps> = ({changeTheme}):JSX.Element => {

  return (
    <NavContainer>
      <Button onClick={changeTheme}>
        <Image src={moon} alt="Change Theme" height={25} width={25}/>
      </Button>
      <Column>
        <Link href="/">
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
