import React from 'react'
import {  ALERT_ERROR, ALERT_TITLE_WRONG_USER } from '../../consts/const';
import {InfoOutlineIcon, ArrowBackIcon} from '@chakra-ui/icons'
import {useHistory } from 'react-router-dom';
import { motion } from "framer-motion"

import {
    Alert,
    AlertTitle,
    AlertDescription,Box,Center,Button,
  } from "@chakra-ui/react"
export const ErrorComponent = () => {
  let history = useHistory();

    function toHome() {
        history.push("/");
      }
  const MotionBox = motion(Box)

    return (
        <div>
            <Center bg="blackAlpha.200" w="100vw" h="100vh" >
     
     <MotionBox w='200px' boxShadow="2xl"   initial={{opacity:0, y:'-300px'}} animate={{opacity:1, y:0}}  >
      <Alert
   status='error'
   variant="subtle"
   flexDirection="column"
   alignItems="center"
   justifyContent="center"
   textAlign="center"
   height="200px"
 >
 <InfoOutlineIcon w={6} h={6} color="red.500" />
   <AlertTitle mt={4} mb={1} fontSize="lg">
  {ALERT_ERROR}
   </AlertTitle>
   <AlertDescription maxWidth="sm">
 {ALERT_TITLE_WRONG_USER}
 
   </AlertDescription>
 
   <Button onClick={()=>{toHome()}} colorScheme='red' variant="ghost">
      <ArrowBackIcon/>  Volver al Inicio
   </Button>
 </Alert>
 </MotionBox> 
    </Center>
        </div>
    )
}
