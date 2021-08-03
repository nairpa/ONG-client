import React from 'react'
import { Box, Image, WrapItem, Wrap, Center, Text } from "@chakra-ui/react";
import SelectedUseState from './SelectedUseState'
import Header from "../../../components/Header/Header";
import Footer from '../../FooterComponent/Footer';

const NewsSelected = () => {

  const [post] = SelectedUseState()

  return (
    <Box mt={10}>
      <Header />
      <Center >
        <Box p="6"
          height={{
            base: "100%", // 0-48em
            md: "50%", // 48em-80em,
            xl: "25%", // 80em+
          }} >
          <Wrap spacing={3}>
            <WrapItem borderRadius="lg">
              <Box
                boxShadow={"xl"}
                className="container"
                maxW="lg"
                overflow="hidden"
                borderWidth="1px"
                borderRadius="lg"

              >
                <div className="card-image">
                  <Image src={post.image} h="300px" objectFit="cover" w="100%" />
                </div>
                <Box
                  bg="white"
                  p={4}
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  <div className="card-title">
                    <Text>{post.id} - {post.name} </Text>
                  </div>
                </Box>
                <Box p={4}
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                >
                  {post.content}
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Center>
      <Footer />

    </Box>



  )
}

export default NewsSelected;
