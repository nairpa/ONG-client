import React from "react";
import { FormControl, FormLabel, FormErrorMessage, Image } from "@chakra-ui/react";
import { Box, Button, Center, Input } from "@chakra-ui/react";
import CKEditor from "ckeditor4-react";
import { ONG_COLORS, REQUIRED_FIELD } from "../../consts/const";
import CKEditorConfig from "../../helpers/formNews/CKEditorConfig";
import { useForm } from "./useForm";

function FormNews({data}) {
   const {
    handleInput,
    handleEditorData,
    handleFile,
    handleInputCategory,
    handleSubmit,
    contentError,
    nameError,
    categoryError,
    imageError,
    loading,
    dataForm,
  } = useForm(data);

  
  return (
    <Box marginLeft={{md: 40, lg: 20}} boxShadow="md" p="6" rounded="md" bg="white">
      <Center>
        <Box w="80%" mt={8} mb={5}>
          <FormControl isInvalid={nameError}>
            <FormLabel htmlFor="name" fontWeight="bold">
              Título
            </FormLabel>
            <Input
              id="name"
              variant="flushed"
              defaultValue={dataForm.name}
              onChange={handleInput}
            />
            <FormErrorMessage>{REQUIRED_FIELD}</FormErrorMessage>

          </FormControl>
          <FormControl isInvalid={categoryError}>
            <FormLabel htmlFor="categoryId" fontWeight="bold">
              Categoria
            </FormLabel>
            <Input
              id="categoryId"
              variant="flushed"
              defaultValue={dataForm.categoryId}
              onChange={handleInputCategory}
            />
            <FormErrorMessage>{REQUIRED_FIELD}</FormErrorMessage>
            
          </FormControl>
          <FormControl isInvalid={imageError}>
            <FormLabel fontWeight="bold">Imagen</FormLabel>

            <Box w="80%" justifyContent="flex-end">
              {data ? <Image src={dataForm.file} objectFit='cover'/> : null}
              <Input
                id="file"
                type="file"
                name="file"
                color="red"
                onChange={(e) => handleFile(e.target.files[0])}
              />
              <FormErrorMessage>{REQUIRED_FIELD}</FormErrorMessage>
            </Box>
          </FormControl>
        </Box>
      </Center>

      <Center>
        <Box w="80%" mb={5}>
          <FormControl isInvalid={contentError}>
            <FormLabel fontWeight="bold">Contenido</FormLabel>
            <CKEditor
              config={CKEditorConfig}
              type="classic"
              data={dataForm.content}
              onChange={handleEditorData}
            />
            <FormErrorMessage>{REQUIRED_FIELD}</FormErrorMessage>
          </FormControl>
        </Box>
      </Center>

      <Center></Center>
      <Center>
        <Box display="flex" w="80%" justifyContent="flex-end">
          <Button
            bgColor={ONG_COLORS.BLUE}
            color="white"
            onClick={handleSubmit}
            isLoading={loading}
          >
            {data? 'Actualizar' : 'Agregar'}
          </Button>
        </Box>
      </Center>
    </Box>
  );
}

export default FormNews;
