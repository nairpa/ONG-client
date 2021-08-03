// imorts from react.
import React from "react";
import {Link} from "react-router-dom"

// imports from externals libraries.
import { Box, IconButton, Center, Heading, Flex } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'

// imports from locals files.
import TableTestimonialsBackoffice from '../../../components/Backoffice/BackofficeTestimonials/TableTestimonialsBackoffice';
import { Rectangular } from "../../../assets/css/globalStyles";

const TestimoniesScreen = () => {

  return (
    <Box marginLeft={{sm: 0, md: 40, lg: 40}}>
      <Center>
        <Heading p={2} fontFamily={'truculenta'}>Testimonios</Heading>
      </Center>
      <Rectangular />
      <Box overflowX='auto'>
        <TableTestimonialsBackoffice />
      </Box>
      <Flex width={{base: '100%', sm: '100%', md: '80%', lg: '85%'}} p={{ base: 10, sm: 10, md: 10, lg: 5}} bottom={5} position='fixed' justifyContent='flex-end'>
        <Link to="/backoffice/testimonials/new-entry">  
          <IconButton bgColor='#292929' color='white' _hover={{opacity: 0.9}}shadow='dark-lg' icon={<AddIcon />} borderRadius={20}/>
        </Link>
      </Flex>
    </Box>
  );
};

export default TestimoniesScreen;