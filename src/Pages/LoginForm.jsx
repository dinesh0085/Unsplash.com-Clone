import styles from "./Login.module.css"
import { Button, ButtonGroup, Input, Stack } from '@chakra-ui/react'
import facebookLogo from "../svg/facebookLogo.svg"
import {
    FormControl,
    FormLabel
  } from '@chakra-ui/react'
import { useContext, useState } from "react"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"






export default function LoginForm(){
  const {loginUserForAuthentication} = useContext(AuthContext)   
  const [token,setToken] = useState("")
    const [login,setLogin] = useState({
        
        
        "username": "abc",
        "password": "abc"
    
      })
      if(token!=""){
        loginUserForAuthentication()  
      }
      




      const handleChange=(e)=>{
        const {name:type,value,name} = e.target
        setLogin({...login,[name]:value})
      }



      const handleSubmit=(e)=>{
       e.preventDefault()
        loginUser()
      }

      const loginUser=()=>{
        const {username,password} = login
       axios.post("https://masai-api-mocker.herokuapp.com/auth/login",{
        username:username,
        password:password
       })
        .then((res)=>{
            console.log(res)
            alert(res.data.token)
            setToken(res.data.token)
           
        })
        .catch((err)=>{
            console.log(err)
            alert("Something went wrong")
        })
      }

      console.log(login)
    return <div className={styles.loginform}>
        <h1>Login</h1>
        <p>Welcome back</p>
        <Button className={styles.facebookloginBtn} colorScheme='blue'> <img className={styles.facebooklogo} src={facebookLogo} alt="" /> Join using Facebook</Button>
        
        <p className={styles.or}>OR</p>
       
     
        <FormControl isRequired className={styles.form}>
      

       <FormLabel>Email</FormLabel>
       <Input
        borderColor='black'
        errorBorderColor='red.300'
        placeholder='Email'
        type="text" 
       value={login.username}
       onChange={handleChange}
       name="username"
      
       />

       

       <FormLabel>Password</FormLabel>
       <Input 
       borderColor='black'
       errorBorderColor='red.300'
       placeholder='Password' 
       type="password"
       value={login.password}
       onChange={handleChange}
       name="password" 
       />

       <Button 
       className={styles.joinbutton} 
       colorScheme='blue'
       backgroundColor={"black"}
       onClick={handleSubmit}
       >  Login</Button>

       </FormControl>
   
    </div>
}

//https://masai-api-mocker.herokuapp.com/auth/register