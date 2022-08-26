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

  export default function ModalComponent({isOpen,setModalVisible,modalData}) {
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
                <div className={styles.userFeild}>

<img className={styles.userImageURL} src={modalData.userImageURL} alt="" />
<p>{modalData.user_id}</p>
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

</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
           <img src={modalData.largeImageURL} alt="" />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }