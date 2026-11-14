import { createContext } from "react";


interface IAuthContextType {
    isLoggedIn : boolean;
    login: () => void;
    logout: () => void;
}


export const AuthContext = createContext<IAuthContextType | undefined>(undefined)
