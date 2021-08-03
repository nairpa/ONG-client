import React, { useContext, Fragment } from "react";

import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

import FormUserComponent from "../../components/User/FormUserComponent/FormUserComponent";
import CardUserComponent from "../../components/User/CardUserComponent/CardUserComponent";
import { UserContext } from "../../components/User/ContextUser/UserContext";

import Footer from "../../components/FooterComponent/Footer";
import Header from '../../components/Header/Header';

import "./style.css";

function ScreenUserProfile() {
  const { preferences } = useContext(UserContext);

  return (
    <Fragment>
      <Header/>
      
      <Box w="100%" rounded="md" className="container" zIndex="-10">
        <Image
          src={preferences.imgBackgroundUrl}
          objectFit="cover"
          h="45vh"
          w="100%"
        />

        <div className="overlay">
          <Center>
            <Text mt="60px" noOfLines={[1, 2, 3]} as="em" color="#008CBA" fontSize="xl">
              Click para cambiar el fondo
            </Text>
          </Center>
        </div>
      </Box>

      <Box m="auto" mt="-150px" maxW="1200px" zIndex="50">
        <Flex justifyContent="center" flexWrap="wrap">
          <Box maxW="350px" w="90%" my="10%" mx="5%">
            <CardUserComponent />
          </Box>
          <Box maxW="450px" w="90%" my="10%" mx="5%">
            <FormUserComponent />  
          </Box>
        </Flex>
      </Box>

      <Footer />
    </Fragment>
  );
}

export default ScreenUserProfile;