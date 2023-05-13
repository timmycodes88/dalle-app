import { redirect, useActionData } from "react-router-dom"
import AuthAPI from "../api/AuthAPI"
import { LOGIN } from "../pages/AuthForm"

export const authAction = async ({ request }) => {
  const formData = await request.formData()
  const { username, email, usernameOrEmail, password, type } =
    Object.fromEntries(formData.entries())

  //* Checks
  if (type === LOGIN) {
    if (!usernameOrEmail || !password) {
      return "Fill in bruh"
    }
  } else {
    if (!username || !email || !password) {
      return "Fill in bruh"
    }
  }
  /**@type {import("../api/AuthAPI").AuthResponse} */
  const { user, token, error } =
    type === LOGIN
      ? await AuthAPI.login({ usernameOrEmail, password })
      : await AuthAPI.signup({ username, email, password })
  if (error) return error
  console.log(user)
  localStorage.setItem("token", token)
  return redirect("/")
}

/**
 *
 * @returns {null | string} Form error string on submittion
 */
export const useAuthError = () => useActionData()
