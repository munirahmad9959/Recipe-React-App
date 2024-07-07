import Pages from "./pages/Pages"
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { GiKnifeFork } from "react-icons/gi"


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>deliciousss</Logo>
        </Nav>
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
      </div>

    </>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`

const Nav = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 390px) {
    justify-content: center;
  }
`;

export default App
