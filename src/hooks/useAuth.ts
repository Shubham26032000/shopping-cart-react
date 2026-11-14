import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export function useAuth() {
    let authCtx = useContext(AuthContext)
    if(!authCtx) {
        throw new Error("Auth Context Error...")
    }
    return authCtx
}
