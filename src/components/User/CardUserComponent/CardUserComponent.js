import React, { useContext } from 'react';

import { Box, Avatar, Text, Stack, Heading } from '@chakra-ui/react';

import { UserContext } from '../ContextUser/UserContext';

import { useSelector } from 'react-redux'

const CardUserComponent = () => {
  const { user } = useContext(UserContext);
  const { role } = useSelector(state => state.user);

  return (
    <Box textAlign="center" bgColor="#FFF" boxShadow="2xl" borderRadius="5px">
      <Avatar mt={7} mb={5} size="2xl" src={user.profileImg} />
        
      <Stack spacing="5px"  mb={5}>
        <Heading fontSize={'2xl'} fontWeight={500}>
          {user.name} {user.lastname}
        </Heading>
         {/*Cambiarlo por el role que sacamos del redux*/}
        <Text color="gray.500">{ role ? role : null }</Text>
      </Stack>

      <Stack spacing="5px">
        <Text fontSize="md" color={'gray.500'}>
          Email
        </Text>
        <Text fontWeight={600} pb="43px">{user.email}</Text>
      </Stack>
    </Box>
  )
}

export default CardUserComponent
