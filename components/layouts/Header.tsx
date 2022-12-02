import Image from "next/image"
import styled from "styled-components";

import {adaptiveValue} from "../styles/px2vw";
import ava from "/public/icons/ava.png"
import Link from "next/link";
import search from "/public/icons/search.svg"

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(5px);
  position: sticky;
  top: 0;
  left: 0;
  height: fit-content;
  width: 100%;
  grid-area: header;
  ${adaptiveValue('padding', 5, 10, 1)};

  & div, input{
    margin: 0 5px;
    border-radius: 8px;
  }
  & > a {
    font-weight: 800;
    ${adaptiveValue('font-size', 20, 24, 1)}
    color: ${({theme}) => theme.colors.primary};
  }
`

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  max-width: 600px;
  padding: 8px;
  & input {
    width: 100%;
  }
`

const Profile = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 8px;
  & span {
    ${adaptiveValue('margin-right', 8, 12, 1)}
    opacity: .7;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">NFT</Link>

        <Search placeholder="Search">
          <input type="text" placeholder='Search'/>
          <button>
            <Image src={search} width={15} height={15} alt="Search" />
          </button>
        </Search>

      <Profile>
        <span>User</span>
        <Image src={ava} width={20} height={20}  alt="Avatar" />
      </Profile>

    </HeaderContainer>
  );
};

export default Header;
