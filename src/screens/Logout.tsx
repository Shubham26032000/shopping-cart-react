import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"


function Logout() {
    let { logout } = useAuth()


    //After Render
    useEffect(() => {
        logout()
        sessionStorage.clear()
    }, [])


    return <>
        <h1>You had logged out successfully...</h1>
    </>
}
export default Logout


console.log("Logout Loaded.")
