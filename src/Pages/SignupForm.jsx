import styles from "./Signup.module.css"
import { Button, Input, Stack } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import facebookLogo from "../svg/facebookLogo.svg"
import {
    FormControl,
    FormLabel
  } from '@chakra-ui/react'
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"






export default function SignupForm(){
    const [register,setRegister] = useState({
        "name": "",
        "email": "",
        "password": "",
        "username": "",
        "mobile": "999999",
        "description": "idnxladnasnd" 
      })



      const handleChange=(e)=>{
        const {name:type,value,name} = e.target
        setRegister({...register,[name]:value,mobile:value})
      }



      const handleSubmit=(e)=>{
       e.preventDefault()
        registerUser(register)
      }

      


      const registerUser=(register)=>{
        const {email,password} = register;
       axios.post("https://reqres.in/api/register",{
        "email":email,
        "password":password
    })
        .then((res)=>{
            // console.log(res)
            if(res.status==200){
              alert("Registration Successfull")
            }
            
        })
        .catch((err)=>{
            // console.log(err)
            alert("Something went wrong")
        })
      }

      // console.log(register)

      
    return <div className={styles.signupform}>
        <h1>Join Unsplash</h1>
        <p>Already have an account? <Link to="/login"> Login</Link></p>
        <Button className={styles.facebooksignupBtn} colorScheme='blue'> <img className={styles.facebooklogo} src={facebookLogo} alt="" /> Join using Facebook</Button>
        
        <p className={styles.or}>OR</p>
       
        <Container>
       <Stack>
        <FormControl isRequired className={styles.form} width={"67%"} margin={"auto"}>
       <FormLabel>name</FormLabel>
       <Input placeholder='name' 
       value={register.name}
       onChange={handleChange}
       name="name"
       type="text"
       />

       <FormLabel>Email</FormLabel>
       <Input
        placeholder='Email'
        type="email" 
       value={register.email}
       onChange={handleChange}
       name="email"
      
       />

       <FormLabel>Username</FormLabel>
       <Input
       placeholder='username'
       type="text" 
       value={register.username}
       onChange={handleChange}
       name="username"
       />

       <FormLabel>Password</FormLabel>
       <Input 
       placeholder='Password' 
       type="password"
       value={register.password}
       onChange={handleChange}
       name="password" 
       />

       <Button 
       className={styles.joinbutton} 
       colorScheme='blue'
       onClick={handleSubmit}
       >  Join</Button>

       </FormControl>
       
       </Stack>
       </Container>

    </div>
}

//https://masai-api-mocker.herokuapp.com/auth/register