import { redirect } from "react-router-dom"

export const logoutLoader = async () => {
  localStorage.removeItem("token")
  return redirect("/get-in")
}
