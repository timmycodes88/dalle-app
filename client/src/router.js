import { createBrowserRouter, redirect } from "react-router-dom"
import App from "./App"
import AuthForm from "./pages/AuthForm"
import { authAction } from "./routes/authRoute"
import { logoutLoader } from "./routes/logoutRoute"
import { appLoader } from "./routes/appRoute"

const router = createBrowserRouter([
  {
    path: "/",
    loader: appLoader,
    shouldRevalidate: () => false,
    element: <App />,
    children: [
      { path: "get-in", action: authAction, element: <AuthForm /> },
      { path: "logout", loader: logoutLoader },
    ],
  },
  { path: "*", loader: () => redirect("/") },
])

export default router
