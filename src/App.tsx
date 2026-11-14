import { NavLink, Outlet } from "react-router"
import { useAuth } from "./hooks/useAuth"


// Refer Greet Component
// import { Greet } from "./Greet"


// Refer CSS
import "./App.css"
import { useEffect } from "react"


// Define a Functional Root Component
function App() {


    const { isLoggedIn, login } = useAuth()


    // After Render
    useEffect(() => {
        if(sessionStorage.getItem("user")) {
            login()
        }
    }, [])


    // Return UI in JSX
    return <>
        <div className="app-box">
            <h1>My React Shopping App</h1>
            <nav className="navlinks">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/list">Shopping List</NavLink>
                { isLoggedIn ? <>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/logout">Logout</NavLink>
                </> : <>
                <NavLink to="/login">Login</NavLink>
                </>}
            </nav>
        </div>
        <Outlet />
       
        {/* <Greet /> */}
    </>
}
// Export the App function as default member
export default App

