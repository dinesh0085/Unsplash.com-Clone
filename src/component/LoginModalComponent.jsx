import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
  } from '@chakra-ui/react'
  import styles from "../Pages/Home.module.css"

  export default function LoginModalComponent({isOpen,setModalVisible,modalData}) {
  console.log(modalData)
    const onClose=()=>{
        setModalVisible(false)
    }

    return (
      <>
  
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                
{/* <Button className={({isActive})=>(isActive?styles.activelike:styles.defaultlike)} >♥</Button> */}

     <h1>LOGIN</h1>

 

    </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
           <img src={modalData.largeImageURL} alt="" />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>View:-{modalData.views}</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }