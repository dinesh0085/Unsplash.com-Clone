import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext=React.createContext();

export default function AuthContextProvider(props){
    const [isAuth,setIsAuth] = useState(false);

    const loginUserForAuthentication=()=>{
    setIsAuth(true)
    }

console.log(isAuth)

    return (
        <AuthContext.Provider value={{isAuth,loginUserForAuthentication}}>
            {props.children}
        </AuthContext.Provider>
    )
}