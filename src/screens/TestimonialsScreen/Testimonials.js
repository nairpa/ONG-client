import React, { Fragment } from "react";

import { Box, Center, Text, SimpleGrid } from "@chakra-ui/react";

import CardTestimonials from "../../components/TestimonialsCards/index";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/Header/Header";

import { Rectangular } from "../../assets/css/globalStyles";

const Testimonials = () => {
  return (
    <Fragment>
      <Header />
      <Box marginTop="4rem" paddingBottom={5}>
        <Text as="h2" textAlign="center" fontSize="5xl" p="2" fontFamily="Truculenta">
          Testimonios
        </Text>
        <Rectangular />
      </Box>
      <SimpleGrid mt={10} minChildWidth="400px" spacing="30px" mt={10}>
        <Center>
          <Box py={5}>
            <CardTestimonials />
          </Box>
        </Center>
      </SimpleGrid>
      <Footer />
    </Fragment>
  );
};

export default Testimonials;
