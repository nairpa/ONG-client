// imports from react.
import React from 'react';

// imports from externals libraries.
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
         ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

const BackofficeModalEdit = ({ Component }) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
    
  return ( 
    <>
      <Button onClick={onOpen}>Abrir Modal</Button>
  
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Título del Modal</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody>
            <Component/>
          </ModalBody>
  
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button variant="ghost">Acción Secundaria</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
 
export default BackofficeModalEdit;