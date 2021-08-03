import { Fragment } from "react";
import "./style.css";

import { Box, SimpleGrid, Image,Center,Text } from "@chakra-ui/react";

import FormContact from "../../components/formScreenContact/FormContact";
import TextContact from "../../components/textScreenContact/TextContact";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/Header/Header";
import { IMAGE_BACKGROUND } from "../../consts/const";

export default function ScreenContact() {
  return (
    <Fragment>
      <Header />
      <Box>
         <Box w="100%" rounded="md" className="container">
        <Image
          src={IMAGE_BACKGROUND}
          objectFit="cover"
          h="65vh"
          w="100%"
        />
        <div className="overlay">
          <Center>
            <div className="text">
              <Text noOfLines={[1, 2, 3]} as="em" color="#008CBA" fontSize="xl">
              </Text>
            </div>
          </Center>
        </div>
        </Box>
          <SimpleGrid  minChildWidth="330px" spacing="40px" m={8} className="box"  mt={-150}>
            <TextContact />
            <Box boxShadow="md" p="6" rounded="md" bg="white" height="445px" >
              <FormContact />
            </Box>
          </SimpleGrid>
     
      </Box>
     

      <Footer />
    </Fragment>
  );
}
