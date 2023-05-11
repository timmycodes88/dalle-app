import { useState } from "react"
import { Form } from "react-router-dom"
import tw from "twin.macro"

export const LOGIN = "login"
export const SIGNUP = "signup"

export default function AuthForm() {
  const [formType, setFormType] = useState(LOGIN)

  const toggle = () => setFormType(prev => (prev === LOGIN ? SIGNUP : LOGIN))

  return {
    [LOGIN]: (
      <>
        <Title>Login</Title>
        <Form method="POST" className="text-white">
          <label htmlFor="usernameOrEmail">Username</label>
          <input className="text-black" type="text" name="usernameOrEmail" />
          <label htmlFor="password">Password</label>
          <input className="text-black" type="password" name="password" />
          <button type="submit">Submit</button>
          <input className="hidden" name="type" value={LOGIN} />
        </Form>
        <ToggleButton text="Sign Up" toggle={toggle} />
      </>
    ),
    [SIGNUP]: (
      <>
        <Title>Sign Up</Title>
        <Form method="POST" className="text-white">
          <label htmlFor="username">Username</label>
          <input className="text-black" type="text" name="username" />
          <label htmlFor="email">Email</label>
          <input className="text-black" type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input className="text-black" type="password" name="password" />
          <button type="submit">Submit</button>
          <input className="hidden" name="type" value={SIGNUP} />
        </Form>
        <ToggleButton text="Login" toggle={toggle} />
      </>
    ),
  }[formType]
}

const ToggleButton = ({ text, toggle }) => (
  <button onClick={toggle} className="text-white">
    {text}
  </button>
)

const Title = tw.h1`text-white text-5xl`
