//imports from react.
import React, { useContext } from 'react';

// imports from externals libraries.
import { Box, FormControl, Input, FormLabel, Flex, IconButton, Text, Spacer } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import { UserContext } from '../ContextUser/UserContext';
import FormUseState from './UseForm';

import BackofficeModalDelete from '../../Backoffice/BackofficeModal/BackofficeModalDelete';

import { MODAL_TITLE_DELETE_PROFILE, PROFILE_DELETE_QUESTION } from '../../../consts/const';

const FormUserComponent = () => {
  const { user, deleteAccount } = useContext(UserContext)

  const [handleChange, handleSubmit, show] = FormUseState()

  return (
      <Box boxShadow={'2xl'} bgColor="#FFF" borderRadius="5px">
        <Flex alignItems="center" px={5} bgColor="#1e607a" borderTopRadius="5px"> 
          <Box p="3">
            <Text as="h2" color="#fff" fontSize="3xl">Mi Perfil</Text>
          </Box>

          <Spacer />

          <Box p="3">
            {
              show === false ? (
                <BackofficeModalDelete 
                  title = { MODAL_TITLE_DELETE_PROFILE }
                  text = { PROFILE_DELETE_QUESTION }
                  confirm = {deleteAccount}
                />
              ) : (
                <IconButton
                  ml = "15px"
                  isRound="true" 
                  size="sm"
                  bg={'blue.400'}
                  color="#FFF"
                  _hover={{ bg: 'blue.500', }}
                  icon={<CheckCircleIcon />}
                  onClick={handleSubmit}
                />
              )
            }
          </Box>
        </Flex>

        <Box my={6} mx={10} align="center">

          <FormControl id="name" >
            <FormLabel fontWeight="bold" mb="0">Nombre</FormLabel>
            <Input type="text"
              variant="flushed"
              placeholder="Ingrese su nombre..."
              defaultValue={user.name}
              name="name"
              onChange={handleChange}
              mb={4}
            />
          </FormControl>

          <FormControl id="lastname">
            <FormLabel fontWeight="bold" mb="0">Apellido</FormLabel>
            <Input type="text"
              variant="flushed"
              placeholder="Ingrese su apellido..."
              defaultValue={user.lastname}
              name="lastname"
              onChange={handleChange}
              mb={4}
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel fontWeight="bold" mb="0">Email</FormLabel>
            <Input type="email"
              variant="flushed"
              placeholder="Ingrese su email..."
              defaultValue={user.email}
              name="email"
              onChange={handleChange}
              mb={8}
            />
          </FormControl>
        </Box>
      </Box>
  )
}

export default FormUserComponent;