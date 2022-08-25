import { Button, Input } from "@chakra-ui/react"
import { Link, NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar(){
    return (
        <div className={styles.navbar}>
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
           </div>
           <div className={styles.lowerNav}>
           <NavLink to="/" ><p>Editorial</p></NavLink>
           <p>|</p>
         <div>
            <p className={styles.featuredtext}>Featured</p>
            <p>Girls vs Stereotypes</p>
           </div>
            <p>Current Events</p>
            <p>Wallpapers</p>
            <p>3D Renders</p>
            <p>Textures & Patterns</p>
            <p>Experimental</p>
            <p>Architecture</p>
            <p>Nature</p>
            <p>Bussiess & Work</p>
            <p>Fashion</p>
            <p>Films</p>
            <p>Food</p>
          
          
          
           </div>

        </div>
    )
}

export default Navbar