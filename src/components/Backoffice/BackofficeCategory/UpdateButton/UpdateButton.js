// imports from react.
import React from 'react';

// import from externals libraries.
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useContextCall } from '../BackofficeCategoryForm/CategoryProvider'

const UpdateButton = ({ element }) => {

  const { editCategory } = useContextCall()

  const handleClick = () => {
    editCategory(element.id)
  }

  return (
    <IconButton isRound="true" colorScheme="blue" size="sm" icon={<EditIcon />} onClick={handleClick} />
  );
}

export default UpdateButton;
