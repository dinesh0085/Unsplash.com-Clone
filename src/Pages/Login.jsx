import { useStatStyles } from "@chakra-ui/react"
import { useContext } from "react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import styles from "./Login.module.css"
import LoginForm from "./LoginForm"


function Login(){
   
    const {token} = useContext(AuthContext);

    if(token!=""){
         <NavLink to="/" ></NavLink>
    }



    return (
        <div className={styles.login}>
           <Link to="/">  <img className={styles.loginLogo} src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt="" /></Link>
           
           <LoginForm></LoginForm>
             
           <div className={styles.dontHveAcnt}>Don’t have an account?  <Link to="/signup"> Join Unsplash</Link></div>

            
        </div>
    )
}

export default Login