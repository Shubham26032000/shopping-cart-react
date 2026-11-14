// Configuring Application Routes
import { createBrowserRouter, Navigate } from "react-router"
import App from "./App"
import { Home } from "./screens/Home"
import ShoppingList from "./screens/ShoppingList"
import { CartProvider } from "./context/CartProvider"
//import Dashboard from "./screens/Dashboard"
//import Logout from "./screens/Logout"
import Login from "./screens/Login"
import { ProtectedRoute } from "./components/ProtectedRoute"


import { lazy } from "react"


const Dashboard = lazy(() => import("./screens/Dashboard"))
const Logout = lazy(() => import("./screens/Logout"))


export const appRoutes = createBrowserRouter([
    { path:"/", element: <App />, children: [
        { path:"", element: <Navigate to={'/home'} /> },
        { path:"/home", element: <Home /> },
        { path:"/list", element: <CartProvider> <ShoppingList /> </CartProvider> },
        { path:"/dashboard", element: <ProtectedRoute> <Dashboard /> </ProtectedRoute> },
        { path: "/logout", element: <ProtectedRoute> <Logout /> </ProtectedRoute>},
        { path: "/login", element: <ProtectedRoute> <Login /> </ProtectedRoute> },
        { path:"*", element: <h1>404. Page Not Found.</h1>}
    ] }
])

