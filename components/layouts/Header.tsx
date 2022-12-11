import Image from "next/image"
import styled from "styled-components";

import {adaptiveValue} from "../styles/px2vw";
import ava from "/public/icons/ava.png"
import Link from "next/link";
import search from "/public/icons/search.svg"
import moon from "/public/icons/moon.svg"
import {useContext, useEffect} from "react";
import {LightThemeContext} from "../../pages/_app";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {changeSearchText} from "../../redux/slices/app/slice";
import {sizes} from '../styles/globalstyles';


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  height: fit-content;
  width: 100%;
  ${adaptiveValue('padding', 5, 10, 1)};
  
  & div, input{
    border-radius: 8px;
  }
  
  & > a {
    min-width: fit-content;
    padding-right: 10px;
    font-weight: 800;
    ${adaptiveValue('font-size', 18, 24, 1)}
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
  button {
    display: flex;
    align-items: center;
  }
  
  @media (max-width: ${sizes.mobileL}) {
    &:focus {
      background-color: #900;
    }
    width: fit-content;
  }
`

const RightSide = styled.div`
  display: flex;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 0 1.5vw;
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
  const dispatch = useDispatch()
  const {lightTheme, setLightTheme} = useContext(LightThemeContext)
  const searchText = useSelector((state: RootState) => state.appSlice.searchText)


  useEffect(() => {
    if ((!localStorage.lightTheme) && (localStorage.lightTheme !== 'true' || 'false')) {
      localStorage.setItem('lightTheme', 'false')
    }
    setLightTheme(localStorage.getItem('lightTheme'))
  }, [])

  const changeTheme = () => {
    const toggled = lightTheme === 'true' ? 'false' : 'true'
    localStorage.setItem('lightTheme', toggled)
    setLightTheme(toggled)
  }

  const inputChange = (e) => {
    dispatch(changeSearchText(e.target.value))
  }

  return (
    <HeaderContainer>
      <Link href="/home">NFT</Link>

        <Search placeholder="Search">
          <input type="text" placeholder='Search' value={searchText} onChange={inputChange}/>
          <button>
            <Image src={search} width={15} height={15} alt="Search" />
          </button>
        </Search>

      <RightSide>
        <Button onClick={changeTheme}>
          <Image src={moon} alt="Change Theme" height={25} width={25}/>
        </Button>
        <Profile>
          <span>User</span>
          <Image src={ava} width={20} height={20}  alt="Avatar" />
        </Profile>
      </RightSide>

    </HeaderContainer>
  );
};

export default Header;
