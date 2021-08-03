import React from "react";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Spacer,
  IconButton,
  Select
} from "@chakra-ui/react";
import { CheckCircleIcon, SmallCloseIcon } from '@chakra-ui/icons';
import LoadingComponent from "../../LoadingComponent";

const FormEditUser = ({ mutation, isLoading, handleChange, handleSubmit, user, showButton, cancelEdit }) => {
  return (
    <Box maxW="lg" boxShadow={"2xl"} bgColor="#FFFFFF">
      {isLoading ? <LoadingComponent /> : (
        <>
          <Flex px={20} bgColor="#1e607a">
            <Box p={5}>
              <Heading fontSize={"xl"} color="#FFF" fontFamily={"body"} flex={1}>
                Editar Usario
              </Heading>
            </Box>
            <Spacer />
            <Box p={3}>
              {
                showButton ? (
                  <IconButton
                    ml="15px"
                    isRound="true"
                    size="sm"
                    bg={'blue.400'}
                    color="#FFF"
                    _hover={{ bg: 'blue.500', }}
                    icon={<CheckCircleIcon />}
                    onClick={(e) => handleSubmit(e)}
                    isDisabled={mutation.isLoading}
                  />
                ) : (
                  <IconButton
                    ml="15px"
                    isRound="true"
                    size="sm"
                    bg={'red.400'}
                    color="#FFF"
                    _hover={{ bg: 'red.500', }}
                    icon={<SmallCloseIcon />}
                    onClick={cancelEdit}
                    isDisabled={mutation.isLoading}
                  />
                )
              }
            </Box>
          </Flex>
          <Box maxW="lg" w="100%" p={10} borderWidth="1px">
            <FormControl>
              <FormLabel fontWeight="bold">Nombre</FormLabel>
              <Input
                variant="flushed"
                name="name"
                onChange={(e) => handleChange(e)}
                type="text"
                defaultValue={user.name}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Apellido</FormLabel>
              <Input
                variant="flushed"
                name="lastname"
                onChange={(e) => handleChange(e)}
                type="text"
                defaultValue={user.lastname}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Email</FormLabel>
              <Input
                variant="flushed"
                name="email"
                onChange={(e) => handleChange(e)}
                type="email"
                defaultValue={user.email}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Rol</FormLabel>
              <Select
                placeholder="Seleccionar Rol"
                onChange={(e) => handleChange(e)}
                name="roleId"
              >
                <option value='1'>Administrador</option>
                <option value='2'>Usuario</option>
              </Select>
            </FormControl>
          </Box>
        </>
      )}
    </Box>
  );
};

export default FormEditUser;
