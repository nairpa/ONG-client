import React from 'react'
import {
    Box,
    Text,
    Center,
    IconButton,
    Table,
    Thead,
    Tbody,
    Flex,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
import { EditIcon, DeleteIcon} from '@chakra-ui/icons'
import LoadingComponent from '../../LoadingComponent'

const TableUser = ({isLoading, mutation, data, handleDelete, history}) => {
    return (
        <>
        {isLoading ? <LoadingComponent /> : data ? (
        <Table variant='striped' colorScheme='gray'>
           <Thead>
                <Tr>
                    <Th textAlign='center'>Nombre</Th>
                    <Th textAlign='center'>Apellido</Th>
                    <Th textAlign='center'>email</Th>
                    <Th textAlign='center'>Editar</Th>
                    <Th textAlign='center'>Eliminar</Th>
                </Tr>           
            </Thead>
            <Tbody>     
                {data.map((user) => {
                    return(
                        <Tr key={user.id}>
                            <Td>
                                {user.name} 
                            </Td>
                            <Td>
                                {user.lastname} 
                            </Td>
                            <Td>
                                {user.email} 
                            </Td>
                            <Td>
                                <Flex justifyContent="center">
                                    <IconButton  color='#1e607a' borderColor='#1e607a' onClick={() => history.push(`/backoffice/users/${user.id}`)} variant='outline' aria-label='edit' icon={<EditIcon />}/>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex justifyContent="center">
                                    <IconButton isDisabled={mutation.isLoading} onClick={() => handleDelete([user.id])} variant='outline' colorScheme='red' aria-label='edit' icon={<DeleteIcon />}/>
                                </Flex>
                            </Td>
                        </Tr>
                    )
                })}        
            </Tbody>
        </Table> ) : (<Center><Box m={5}><Text p={5}>Error al traer usuarios</Text></Box></Center>)}
        </>
    )
}

export default TableUser