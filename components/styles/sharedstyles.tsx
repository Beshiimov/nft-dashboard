import styled from 'styled-components'

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



export { Layout, Title, Main }
