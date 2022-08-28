import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext=React.createContext();

export default function AuthContextProvider(props){
    const [isAuth,setIsAuth] = useState(false);
    const [token,setToken] = useState("");

    const loginUserForAuthentication=(t)=>{
    setIsAuth(true)
    setToken(t)
    }
    console.log("Token No:-"+token)
    const logoutUserForAuthentication=()=>{
        setIsAuth(false)
        }

console.log(isAuth)

    return (
        <AuthContext.Provider value={{isAuth,token,loginUserForAuthentication,logoutUserForAuthentication}}>
            {props.children}
        </AuthContext.Provider>
    )
}