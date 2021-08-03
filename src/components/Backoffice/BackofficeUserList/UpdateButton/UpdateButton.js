// imports from react.
import React from 'react';
import { Link } from 'react-router-dom'

// import from externals libraries.
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const UpdateButton = ({ element }) => {
  const { id } = element;
  return (
    <Link to={`/backoffice/users/${id}`}>
      <IconButton isRound="true" colorScheme="blue" size="sm" icon={<EditIcon />} />
    </Link>
  );
}

export default UpdateButton;
