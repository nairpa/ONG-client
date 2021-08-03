import React from "react";
import validateForm from "../../helpers/ScreenContact/FormContact";
import { Formik } from "formik";
import { ONG_COLORS } from "../../consts/const";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
  Center,
} from "@chakra-ui/react";
import { addContact } from "../../services/Contact/post";

const FormMessage = () => {
  return (
    <div>
      <Text
        bg=" black"
        bgClip="text"
        fontSize="3xl"
        textAlign="center"
        fontFamily="Truculenta"
      >
        Contacto
      </Text>
      <Formik
        initialValues={{ email: "", name: "", message: "" }}
        validate={(values) => validateForm(values)}
        onSubmit={(values, { setSubmitting }) => {
          addContact(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormControl id="nameFormMsg" isRequired>
              <FormLabel pt="1">Nombre</FormLabel>
              <Input
                placeholder="Ingrese su nombre..."
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </FormControl>
            {errors.name && touched.name && errors.name}

            <FormControl id="emailFormMsg" isRequired>
              <FormLabel pt="1">Email</FormLabel>
              <Input
                placeholder="Ingrese su email..."
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </FormControl>

            {errors.email && touched.email && errors.email}

            <FormControl id="msgForm" isRequired>
              <FormLabel pt="1">Mensaje</FormLabel>
              <Textarea
                resize="none"
                placeholder="Ingrese el mensaje..."
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
            </FormControl>
            {errors.message && touched.message && errors.message}
            <Center>
              <Button
                colorScheme="blue"
                color={ONG_COLORS.BLUE}
                size="sm"
                mt="3"
                variant="outline"
                type={"submit"}
                disabled={isSubmitting}
              >
                Enviar
              </Button>
            </Center>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormMessage;
