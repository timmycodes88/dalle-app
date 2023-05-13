import tw from "twin.macro"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useAppData } from "./routes/appRoute"
import { useEffect, useState } from "react"

export default function App() {
  const [auth, setAuth] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token)
    if (!token) setAuth(false)
    else setAuth(true)
  }, [pathname])

  return (
    <Body>
      <Header>
        <HelloWorld>IMG Gen AI</HelloWorld>
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
const Header = tw.header`bg-slate-800 rounded-b-3xl h-[8rem] flex items-center px-32`
const Main = tw.main`flex justify-center items-center h-[calc(100vh - 8rem)] overflow-y-auto`
const Nav = tw.nav`ml-auto`
const NavItem = tw(Link)`text-white text-2xl ml-8`
