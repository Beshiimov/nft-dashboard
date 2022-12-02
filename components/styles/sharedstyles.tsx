import styled from 'styled-components'

const Main = styled.main`
  grid-area: main;
  height: 100%;
  width: 100%;
  max-width: 1980px;
  padding: 0.5rem;
`

const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
          "nav header"
          "nav main";
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
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



export { Main, Title, Layout }
