import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";


interface IAuthProviderProps {
    children: ReactNode
}


export function AuthProvider({children} : IAuthProviderProps) {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const login = () => setIsLoggedIn(true)
    const logout = () => setIsLoggedIn(false)


    return <AuthContext.Provider value={ {isLoggedIn, login, logout } }>
        {children}
    </AuthContext.Provider>
}
