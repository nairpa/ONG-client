import React, { useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import UpdateButton from './UpdateButton/UpdateButton';
import DeleteButton from './DeleteButton/DeleteButton';
import { useContextCall } from './BackofficeCategoryForm/CategoryProvider'

const TableCategoriesBackoffice = () => {

  const { getCategories, categories } = useContextCall()

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Table variant="striped" borderRadius={20}>
      <Thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Descripción</Th>
          <Th>Acciones</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          categories.length > 0 ? (
            categories.map(element =>
              <Tr key={element.id}>
                <Td>{element.name}</Td>
                <Td>{element.description}</Td>
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

export default TableCategoriesBackoffice;