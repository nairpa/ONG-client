// imports from react.
import React, { useState } from 'react';

// import from externals libraries.
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useHistory } from 'react-router-dom'

const UpdateNewsButton = ({element}) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/backoffice/news/${element.id}`)
  }

  return (
    <IconButton isRound="true" colorScheme="blue" onClick={() => handleClick()} size="sm" icon={<EditIcon />}/>
  );
}

export default UpdateNewsButton;
