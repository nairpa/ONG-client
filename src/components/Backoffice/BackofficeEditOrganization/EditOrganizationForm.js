// imports from react.
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// imports from externals libraries.
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

// imports from services.
import { ToastAlertService } from "../../../services/AlertService/AlertService";
import { saveOrganizationData } from '../../../store/HomeDataStore/homeStore';
import YUPEditOrganization from "../../../services/Yup/yup.editOrganization";
import clientAxios from "../../../services/Axios/axios";

// imports estilos
import { Rectangular } from '../../../assets/css/globalStyles';
import { ALERT_ERROR, ALERT_SUCCESS, SUCCESS_EDIT_ORG, ERROR_QUERY_TITLE, BTN_EDITAR } from "../../../consts/const";

export default function EditOrganizationForm() {
  const { name, phone, adress } = useSelector(state => state.home);
  const dispatch = useDispatch();
  //Aca iria el token que trae el login
  const token = localStorage.getItem('token')

  return (
    <Formik
      initialValues={{ name, phone, adress }}
      
      validationSchema={YUPEditOrganization}

      onSubmit = {(values) => {    
        dispatch(saveOrganizationData(values));

        clientAxios.put('/organizations/1/public', values)
          .then (() => {
            ToastAlertService({icon: ALERT_SUCCESS, title: SUCCESS_EDIT_ORG});
          })
          .catch(() => {
            ToastAlertService({icon: ALERT_ERROR, title: ERROR_QUERY_TITLE});
          });
      }}
    >
      <Form className="form">
        <Box pt="4rem" paddingBottom={5}>
          <Text as="h2" textAlign="center" fontSize="5xl">
            Datos de la organización
          </Text>
          <Rectangular />
        </Box>
         
        <Field name="name">
          {({ field, form: { touched, errors } }) => (
            <Box my="20px">
              <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                <FormLabel htmlFor="name" mb="0px">Nombre de la organización*</FormLabel>
                <Input {...field} type="text" name='name' placeholder="Ingrese el nombre de la organización..." variant="flushed"/>
                <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
              </FormControl>
            </Box>
          )}
        </Field>
          
        <Field name="phone">
          {({ field, form: { touched, errors } }) => (
            <Box mb="20px">
              <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                <FormLabel htmlFor="phone" mb="0px">Teléfono*</FormLabel>
                <Input {...field} type="text" name='phone' placeholder="Ingrese el teléfono..." variant="flushed"/>
                <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
              </FormControl>
            </Box>
          )}
        </Field>

        <Field name="adress">
          {({ field, form: { touched, errors } }) => (
            <Box mb="20px">
              <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                <FormLabel htmlFor="adress" mb="0px">Dirección*</FormLabel>
                <Input {...field} type="text" name='adress' placeholder="Ingrese la dirección..." variant="flushed"/>
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
