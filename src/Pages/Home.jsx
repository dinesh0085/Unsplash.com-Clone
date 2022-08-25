import { Input } from "@chakra-ui/react"
import styles from "./Home.module.css"
import { Grid, GridItem } from '@chakra-ui/react'
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import Homegrid from "./Homegrid"

function Home(){
const [homeData,setHomeData] = useState([])
const [query,setQuery] = useState("nature");

const handleChange=(e)=>{
setQuery(e.target.value)
}

const handleEnter=(e)=>{
    handleGetData(query)
    
}
console.log(query)

    useEffect(()=>{
        handleGetData(query)
    },[query])


    // const handleGetData=()=>{
    //     return  axios.get(`https://pixabay.com/api/?key=29500016-32994493ba25e7eeacaa3a092&per_page=100&q=${query}`)
    //     .then((res)=>{
    //    //  console.log(res.data.hits)
    //     setHomeData(res.data.hits)
    //     })
    //     .catch((err)=>{
    //        console.log(err)
    //     })
    // }


    
    console.log(homeData)
    return (
        <div>
           <div className={styles.searchbarSection}>
            <div className={styles.searchbarInnerDiv}>
                <h1 className={styles.searchbarh1}>Unsplash</h1>
                <h4 className={styles.searchbarh4}>The internet’s source of freely-usable images.
                      Powered by creators everywhere</h4>
                     <Input
                      placeholder="search free high-resolution photos"
                      value={query}
                      onChange={handleChange}
                      onMouseEnter={handleEnter}
                      name="query"
                      ></Input>
                     <p>Trending:flowerwallpapersbackgroundshappylove</p>
            </div>
           </div>
           
          
           <Homegrid 
            homeDataArr={homeData}
            ></Homegrid>
     

        </div>
    )
}

export default Home