import { Box, Button, color, useStatStyles } from "@chakra-ui/react"
import { useContext } from "react"
import { useState } from "react"
import ModalComponent from "../component/ModalComponent"
import { AuthContext } from "../context/AuthContext"
import styles from "./Home.module.css"



function Homegrid({homeDataArr}){
  const [modalVisible,setModalVisible] = useState(false)
  const [selected,setSelected] = useState({})
const {token} = useContext(AuthContext)
  
  return (
        <div>
        
        <div className={styles.homegridDiv}>

           {homeDataArr && homeDataArr.map((el,i)=>{
              return <Box 
                     onClick={()=>{
                      if(token!=""){
                        setModalVisible(true);setSelected(el)
                      }else{
                        alert("Please Login")
                      }
                     }} 
                     border={"1px solid"} 
                     boxSize={"auto"} 
                     className={styles.PhotoCard}>

                      <img  className={styles.gridImage} src={el.largeImageURL} alt="" />
                      <div className={styles.userFeild}>

                     <img className={styles.userImageURL} src={el.userImageURL} alt="" />
                     <p>{el.user_id}</p>
            {/* <Button className={({isActive})=>(isActive?styles.activelike:styles.defaultlike)} >♥</Button> */}
          
           <Box
            as='button'
            height='24px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='8px'
            borderRadius='2px'
            fontSize='14px'
            fontWeight='semibold'
            bg='#f5f6f7'
            borderColor='#ccd0d5'
            color='#4b4f56'
            _hover={{ bg: '#ebedf0' }}
            _active={{
            backgroundColor: 'red',
            transform: 'scale(0.98)',
            borderColor: 'red',
            }}
            _focus={{
            backgroundColor: 'white',
            color:"red" }} >
            ♥
            </Box>
 
            </div>


     
             </Box>
       
             })}


            </div>

            <ModalComponent 
             isOpen={modalVisible} 
             setModalVisible={setModalVisible}
             modalData={selected}></ModalComponent>

      </div>
    )
}
export default Homegrid