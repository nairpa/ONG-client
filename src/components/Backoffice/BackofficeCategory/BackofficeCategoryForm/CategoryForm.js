import React from 'react'
import { Box, FormControl, Input, FormLabel, Heading, VStack, Button } from '@chakra-ui/react';
import { useContextCall } from './CategoryProvider'

const CategoryForm = () => {

  const { name, description, id, setName, setDescription, addCategory, UpdateCategory } = useContextCall()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (id !== '') {
      UpdateCategory()
    } else {
      addCategory()
    }
    event.target.reset()
  }

  return (
    <>
      <Box rounded="md" boxShadow={'2xl'} bgColor="#FFFFFF" w="90%" pb={4}>
        <Heading
          rounded="md"
          align="center"
          p={2}
          fontSize={'2xl'}
          color="#FFF"
          fontFamily={'body'}
          bgColor="#1e607a"
        >
          Categorias
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack my={6} mx={10}>
            <FormControl>
              <FormLabel fontWeight="bold">Nombre</FormLabel>
              <Input type="text"
                variant="flushed"
                placeholder="Ingrese nombre de categoría"
                name="name"
                onChange={(event) => setName(event.target.value)}
                defaultValue={name}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Descripción</FormLabel>
              <Input
                type="text"
                variant="flushed"
                placeholder="Ingrese descripción de categoría"
                name="description"
                onChange={(event) => { setDescription(event.target.value) }}
                defaultValue={description}
              />
            </FormControl>
            <hr />
            <Button
              mt={4}
              bgColor="#1e607a"
              type="submit"
              color="#fff"
            >
              Enviar
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  )
}

export default CategoryForm
