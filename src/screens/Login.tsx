import { useState, type SubmitEvent } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth"


function Login() {


    const navigate = useNavigate()


    const { login } = useAuth()


    const [ userName, setUserName ] = useState("")
    const [ password, setPassword ] = useState("")


    function handleSubmit(e : SubmitEvent) {
        e.preventDefault()
        console.log("Form Submitted.", userName, password)
        if(userName == "admin" && password == "admin") {
            console.log("Login Success")
            login()
            sessionStorage.setItem("user", userName)
            navigate("/dashboard")
        } else {
            alert("Login Failed. Invalid Credentials.")
        }
    }


    return <>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
            Username: <input type="text" value={userName} onChange={ (e) => setUserName(e.target.value) } /> <br/>
            Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br/>
            <button>Submit</button>
        </form>
    </>
}
export default Login
