// imports from react.
import React from 'react';
import { useQuery } from 'react-query';

// imports from externals libraries.
import { Center, Image, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

// imports from locals files.
import getTestimonials from '../../../services/Axios/TestimonialsQueries/getTestimonials';
import DeleteButton from './DeleteButton/DeleteButton';
import UpdateButton from './UpdateButton/UpdateButton';
import LoadingComponent from '../../LoadingComponent';

import { LIST_NAME_TESTIMONIALS, ERROR_DELETE_TESTIMONIALS } from '../../../consts/const';

function TableTestimonialsBackoffice() {
  const { isLoading, isError, data } = useQuery(LIST_NAME_TESTIMONIALS, getTestimonials);

  if (isLoading)
    return <LoadingComponent/>

  if (isError)
    return <p>{ ERROR_DELETE_TESTIMONIALS }</p>

  return (
    <Table variant="striped" borderRadius={20}>
      <Thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Imagen</Th>
          <Th>Contenido</Th>
          <Th>Acciones</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          data.length > 0 ? (
            data.map(element =>
              <Tr key={element.id}>
                <Td>{element.name}</Td>
                <Td><Image src={element.image} h="100px" /></Td>
                <Td>{element.content}</Td>
                <Td>
                  <ul>
                    <UpdateButton element={element} />
                    <DeleteButton element={element} />
                  </ul>
                </Td>
              </Tr>
            )
          ) : (
            <Tr>
              <Td>
                <h1>Sin datos.</h1>
              </Td>
            </Tr>
          )
        }
      </Tbody>
    </Table>
  );
}

export default TableTestimonialsBackoffice;