





import type { ReactNode } from "react";
import { Navigate } from "react-router";


interface IProtectedRouteProps {
    children: ReactNode
}


export function ProtectedRoute({children} : IProtectedRouteProps) {
    let pathname = window.location.pathname
    if(sessionStorage.getItem("user") != null) {
        if(pathname == "/login") {
            return <><Navigate to={'/dashboard'} /></>
        }
        return <>{children}</>
    } else {
        if(pathname == "/login") {
            return <>{children}</>
        }
        return <><Navigate to={'/login'} /> </>
    }
}
