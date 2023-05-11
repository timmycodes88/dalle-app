import tw from "twin.macro"
import { Link, Outlet } from "react-router-dom"
import { useAppData } from "./routes/appRoute"

export default function App() {
  const auth = useAppData()
  console.log(auth)
  return (
    <Body>
      <Header>
        <HelloWorld>MERN Template</HelloWorld>
        <Nav>
          {auth ? (
            <>
              <NavItem to="/">Home</NavItem>
              <NavItem to="/logout">Logout</NavItem>
            </>
          ) : (
            <>
              <NavItem to="/">Home</NavItem>
              <NavItem to="/get-in">Get In</NavItem>
            </>
          )}
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Body>
  )
}

const Body = tw.div`bg-slate-900 h-screen`
const HelloWorld = tw.h1`text-white text-5xl`
const Header = tw.header`bg-slate-800 rounded-b-3xl h-32 flex items-center px-32`
const Main = tw.main``
const Nav = tw.nav`ml-auto`
const NavItem = tw(Link)`text-white text-2xl ml-8`
