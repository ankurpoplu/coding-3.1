import React from "react"

const AuthContext = React.createContext();

function ContextProvider({children}) {
    const [isAuth,setIsAuth] = React.useState(false)
    AuthContext.displayName = "My AUTH CONTEXT"

    const toggleAuth = ()=> {
        setIsAuth(!isAuth)
    }

    const value = {
        isAuth,
        toggleAuth
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export {ContextProvider}