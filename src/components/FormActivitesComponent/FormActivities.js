// imports from react.
import React, { useState } from 'react';

// imports from externals libraries.
import { FormControl, FormLabel, FormErrorMessage, Box, Button, Center, Input,Image  } from "@chakra-ui/react";
import CKEditor from 'ckeditor4-react';

// imports locals files.
import { addActivity, modifyActivity } from '../../services/Axios/ActivitiesQueries/ActivitiesFormService';
import { ONG_COLORS, REQUIRED_FIELD } from '../../consts/const';
import CKEditorConfig from './CKEditorConfig';
import validateForm from './validationForm';


function FormActivities(props) {
  let dataState;
  //asigno lo que se traer del TableActivites
  if (props.location.state) {
    dataState = props.location.state;
  }
  const [contentError, setContentError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataForm, setDataForm] = useState({
    name: dataState ? dataState.name : "",
    content: dataState ? dataState.content : "",
  });

  const [file, setFile] = useState({selectedFile:null})
 
  

  const fileINPUT = React.createRef();
  const fileSelectHandler =(e) =>{

    setFile({
        ...file,
        selectedFile: e.target.files[0]

    })
}

  const handleInput = (e) => {
    setDataForm({ ...dataForm, name: e.target.value });
  }

  const handleEditorData = (e) => {
    setDataForm({ ...dataForm, content: e.editor.getData() });
  }

  const handleSubmit = () => {
    validateForm(dataForm)
      .then(async () => {
        setLoading(true);
        setNameError(false);
        setContentError(false);

        const formData = new FormData()
        const fileMade = new File([file.selectedFile],`${file.selectedFile.name}`)

        formData.append('file', fileMade, `${file.selectedFile.name}`)
        formData.append('name', dataForm.name)
        formData.append('content', dataForm.content)
        if (dataState) {
          await modifyActivity(formData,dataState.id);
        } else {
          await addActivity(formData);
        }
        setLoading(false);
      })
      .catch(error => {
        setNameError(error.name);
        setContentError(error.content);
      });
  }

  return (
    <Box marginLeft={{md: 40, lg: 20}}>
      <Center>
        <Box w="80%" mt={8} mb={5}>
          <FormControl isInvalid={nameError}>
            <FormLabel htmlFor="name" fontWeight="bold">Nombre de la Actividad</FormLabel>
            <Input id="name" variant="flushed" defaultValue={dataForm.name} onChange={handleInput} />
            <FormErrorMessage>{REQUIRED_FIELD}</FormErrorMessage>
          </FormControl>
        </Box>
      </Center>
      <Center >
      <FormLabel htmlFor="image">Imagen</FormLabel>
        {dataState ? (
          <Image src={dataState.image} maxW="300px" maxH="200px" />
        ) : (
          <h2>Agregar Imagen</h2>
        )}
      
      
      <Input
        type="file"
        name="image"
        ref={fileINPUT}
        style={{ display: "none" }}
        onChange={fileSelectHandler}
      />
      <Button
        onClick={() => fileINPUT.current.click()}
        style={{ borderRadius: "50%", margin: "5% 2.5%" }}
      >
        +
      </Button>
      </Center>
      <Center>
        <Box w="80%" mb={5}>
          <FormControl isInvalid={contentError}>
            <FormLabel fontWeight="bold">Contenido de la Actividad</FormLabel>
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

      <Center>
        <Box display="flex" w="80%" justifyContent="flex-end">
          <Button bgColor={ONG_COLORS.BLUE} color="white" onClick={handleSubmit} isLoading={loading}>Actualizar</Button>
        </Box>
      </Center>
    </Box>
  )
}

export default FormActivities;