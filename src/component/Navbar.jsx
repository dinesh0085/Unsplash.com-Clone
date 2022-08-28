import { Button, Input } from "@chakra-ui/react"
import { useEffect } from "react"
import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import styles from "./Navbar.module.css"

function Navbar(){
    const {isAuth,logoutUserForAuthentication} = useContext(AuthContext);

    console.log("AUTH"+isAuth)
//For Authentication ............
    useEffect(()=>{

    },[isAuth])
//For Authentication ............
    return (
   
        <div className={styles.navbar}>
             {isAuth===false?
               <div className={styles.upperNav}>
               <Link to="/"><img src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt="" /></Link>
                <Input width={"50%"} borderRadius={"30px"} placeholder='search free high-resolution photos' />
                <p>Explore</p>
                <p>Advertise</p>
                <p>Blog</p>
                <p>|</p>
                <Link to="/login"> <p>Log in</p></Link>
                <p>/</p>
               <Link to="/signup"> <p>Sign up</p></Link>
                <Button>Submit Photo</Button>
               </div>:
               
               <div className={styles.upperNav}>
               <Link to="/"><img src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt="" /></Link>
                <Input width={"50%"} borderRadius={"30px"} placeholder='search free high-resolution photos' />
                <p>Explore</p>
                <p>Advertise</p>
                <p>Blog</p>
                <p>|</p>
                <Link to="/login"> <p>User Profile</p></Link>
                <p>/</p>
                <button onClick={()=>{logoutUserForAuthentication()}}>Logout</button> 
                <Button>Submit Photo</Button>
               </div>}
         


           <div className={styles.lowerNav}>

           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/" ><p>Editorial</p></NavLink>
          
           <p>|</p>

            <div className={styles.activediv}>
            <p className={styles.featuredtext}>Featured</p>
            <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/girls" ><p>Girls vs Stereotypes</p></NavLink>
           </div>

           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/wallpaper" ><div className={styles.activediv}> <p>Wallpapers</p></div></NavLink>
          
           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/3drenders" ><div className={styles.activediv}> <p>3D Renders</p></div></NavLink>
           
           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/texture" ><div className={styles.activediv}><p>Textures & Patterns</p></div></NavLink>
           
           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/experimental" ><div className={styles.activediv}><p>Experimental</p></div></NavLink>
           
           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/architecture" ><div className={styles.activediv}> <p>Architecture</p></div></NavLink>
           
           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/nature" ><div className={styles.activediv}><p>Nature</p></div></NavLink>
           
           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/bussiness" ><div className={styles.activediv}><p>Bussiess & Work</p></div></NavLink>
           
           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/fashion" ><div className={styles.activediv}> <p>Fashion</p></div></NavLink>
           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/film" ><div className={styles.activediv}> <p>Film</p></div></NavLink>
           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/food" ><div className={styles.activediv}> <p>Food & Drinks</p></div></NavLink>
           <NavLink className={({isActive})=>(isActive?styles.active:styles.default)} to="/people" ><div className={styles.activediv}> <p>People</p></div></NavLink>
     

          
          
          
           </div>

        </div>
    )
}

export default Navbar