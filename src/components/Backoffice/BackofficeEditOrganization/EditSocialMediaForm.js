// imports from react.
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// imports from externals libraries.
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

// imports from services.
import { ToastAlertService } from "../../../services/AlertService/AlertService";
import YUPEditSocialMedia from "../../../services/Yup/yup.editSocialMedia";
import { saveSocialMedia } from '../../../store/HomeDataStore/homeStore';
import clientAxios from "../../../services/Axios/axios";

import { ALERT_ERROR, ALERT_SUCCESS, SUCCESS_EDIT_MEDIA, ERROR_QUERY_TITLE, BTN_EDITAR } from "../../../consts/const";

// imports styles
import { Rectangular } from '../../../assets/css/globalStyles';

export default function EditSocialMediaForm() {
  const { facebook, instagram, linkedin } = useSelector(state => state.home);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ facebook, instagram, linkedin }}
      
      validationSchema={YUPEditSocialMedia}
      
      onSubmit = { (values)=> {
        dispatch(saveSocialMedia(values));
        //Una vez que se conecte el backend, enviar la ruta correspondiente
        clientAxios.patch('/media', values)
          .then (() => {
            ToastAlertService({icon: ALERT_SUCCESS, title: SUCCESS_EDIT_MEDIA});
          })
          .catch(() => {
            ToastAlertService({icon: ALERT_ERROR, title: ERROR_QUERY_TITLE});
          });
      }}
    >
      <Form className="form">
        <Box pt="4rem" paddingBottom={5}>
          <Text as="h2" textAlign="center" fontSize="5xl">
            Redes sociales
          </Text>
          <Rectangular />
        </Box>
        
        <Field name="facebook">
          {({ field, form: { touched, errors } }) => (
            <Box my="20px">
              <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                <FormLabel htmlFor="facebook" mb="0px">Facebook*</FormLabel>
                <Input {...field} type="text" name='facebook' placeholder="Ingrese el nombre de la organización..." variant="flushed"/>
                <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
              </FormControl>
            </Box>
          )}
        </Field>
        
        <Field name="instagram">
          {({ field, form: { touched, errors } }) => (
            <Box mb="20px">
              <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                <FormLabel htmlFor="instagram" mb="0px">Instagram*</FormLabel>
                <Input {...field} type="text" name='instagram' placeholder="Ingrese el teléfono..." variant="flushed"/>
                <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
              </FormControl>
            </Box>
          )}
        </Field>

        <Field name="linkedin">
          {({ field, form: { touched, errors } }) => (
            <Box mb="20px">
              <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                <FormLabel htmlFor="linkedin" mb="0px">Linkedin*</FormLabel>
                <Input {...field} type="text" name='linkedin' placeholder="Ingrese la dirección..." variant="flushed"/>
                <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
              </FormControl>
            </Box>
          )}
        </Field>
        
        <Box mt="40px" textAlign="end">
          <Button colorScheme="blue" type="submit"> {BTN_EDITAR} </Button>
        </Box>
      </Form>
    </Formik>  
  );
}
