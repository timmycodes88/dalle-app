import { useLoaderData } from "react-router-dom"

/**
 * @returns {Promise<boolean>} Authenticated or not
 */
export const appLoader = async () => {
  //First thing get the user
  const token = localStorage.getItem("token")
  console.log(token)
  if (!token) return false
  return true
}

/**@type {boolean} Authenticated or not */
export const useAppData = () => useLoaderData()
