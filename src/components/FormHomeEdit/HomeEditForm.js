// import from react.
import React, { useEffect, useState } from "react";

// imports externals libraries.
import { Button, Flex, Input, FormControl, FormLabel, Textarea, Image, Box, IconButton, Text } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons';

import { SLIDE_IMAGE, SLIDE_TEXT, TEXTAREA_MIN_REQUIRED, ALERT_ERROR } from "../../consts/const";

import { CardAlertService } from '../../services/AlertService/AlertService'

import clientAxios from '../../services/Axios/axios'
import { useSelector } from 'react-redux'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"

const HomeEditForm = () => {

  const { images, welcomeText } = useSelector(state => state.home);
  //guardar el welcometext y las imagenes del slide
  const [textoBienvenida, setTextoBienvenida] = useState(welcomeText);
  let [slider, setSlider] = useState(images);
  const [show, setShow] = useState(false)


  console.log(slider);

  //cambio dentro del welcome text
  const handleWelcomeChange = (e) => {
    const welcomeValue = e.target.value;
    setTextoBienvenida(welcomeValue);
  };

  //cambio dentro de las imagenes y sus textos
  const handleSlidesChange = (e, i, input) => {
    let auxSlides = [...slider];
    console.log(e.target.value);
    if (input === SLIDE_IMAGE) {
      auxSlides[i].imageURL = e.target.value
    } else if (input === SLIDE_TEXT) {
      auxSlides[i].text = e.target.value;
    }
    setSlider(auxSlides);
    console.log(slider);
  };

  //submit texto  
  const handleSubmitText = async () => {
    if (welcomeText.length >= 20) {
      await clientAxios.put('/organizations/1/public', welcomeText)
    } else {
      CardAlertService({
        icon: ALERT_ERROR,
        title: TEXTAREA_MIN_REQUIRED
      })
    }
  };

  const showModal = async () => {

  }

  //submit imagen
  const handleSubmitImage = async () => {
    const f = new FormData();

    for (let index = 0; index < slider.length; index++) {
      f.append('file', slider.imageURL[index])
      f.append('text', slider.text[index])
      f.append('organizationId', slider.organizationId[index])
      f.append('imageURL', '')
    }
    await clientAxios.put('/images', f)
  }

  const fileINPUT = React.createRef()
  return (
    <Flex
      position="relative"
      direction="column"
      align="center"
      bg="#fefefe"
      borderWidth="8px"
      w="60%"
      minW="250px"
      minH="400px"
      p={4}
      color="#2a2b2c"
      borderRadius="5px"
      ml="auto"
      mr="auto"
    >
      <Box w={'80%'}>
        <FormControl>
          <FormLabel textAlign="center">Texto de bienvenida</FormLabel>

          <Textarea
            defaultValue={textoBienvenida}
            onChange={(e) => {
              handleWelcomeChange(e);
            }}
            size="md"
          />

          <Flex justify="center" mb="25px" fontWeight="bold">
            <Button onClick={handleSubmitText} type="submit" bgColor={'blue.400'} color="#fff" _hover={{ bg: 'blue.600' }}>
              Editar Texto
            </Button>
          </Flex>
        </FormControl>
      </Box>
      {/* {
          slider.map((item, i) => (
            <Flex key={i} mb={5} direction={['column', 'column', 'row', 'row']}>

              <FormLabel textAlign="center" fontWeight="bold" mr={10}> Slide {i + 1}</FormLabel>

              <Box maxW={'150px'} maxH={'100px'}>
                <Image
                  direction={['column', 'column', 'row', 'row']}
                  src={item.imageURL}
                  objectFit="cover"
                  h={["150px", "125px", "100px", "75px"]}
                >
                </Image>
              </Box>

              <Flex mb="10px" justify="space-around" direction={['column', 'column', 'row', 'row']}>
                <Input
                  size="sm"
                  type="file"
                  width="auto"
                  ref={fileINPUT}
                  onChange={(e) => handleSlidesChange(e, i, SLIDE_IMAGE)}
                  name="Image"
                  id={i}
                />

                <Input
                  width="auto"
                  defaultValue={item.text}
                  onChange={(e) => {
                    handleSlidesChange(e, i, SLIDE_TEXT);
                  }}
                  name="text"
                  id={i}
                />

              </Flex>
            </Flex>
          ))} */}




      <Text textAlign="center" fontWeight="bold">Carrusel</Text>

      <Table variant="simple">
        <TableCaption>Editar Slide del Home</TableCaption>
        <Thead>
          <Tr>
            <Th>Imagen</Th>
            <Th>Texto</Th>
            <Th>Accion</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            slider.map(element =>
              <Tr>
                <Td>
                  <Image
                    direction={['column', 'column', 'row', 'row']}
                    src={element.imageURL}
                    objectFit="cover"
                    h={["150px", "125px", "100px", "75px"]}
                  />
                </Td>
                <Td>{element.text}</Td>
                <Td>
                  <IconButton
                    ml="15px"
                    isRound="true"
                    size="sm"
                    bg={'blue.400'}
                    color="#FFF"
                    _hover={{ bg: 'blue.500' }}
                    icon={<EditIcon />}
                    onClick={(e) => showModal({ element, e })}
                  />
                </Td>
              </Tr>
            )
          }
        </Tbody>
      </Table>

    </Flex>
  );
}

export default HomeEditForm;
