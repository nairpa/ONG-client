// imorts from react.
import React from "react";

// imports from externals libraries.
import { Box, Heading, Center } from "@chakra-ui/react";

// imports from locals files.
import TableUsersBackoffice from '../../../components/Backoffice/BackofficeUserList/TableUsersBackoffice';
import { Rectangular } from "../../../assets/css/globalStyles";

const UsersScreen = () => {

  return (
    <Box marginLeft={{sm: 0, md: 40, lg: 40}}>
      <Center>
        <Heading fontFamily={'truculenta'} p={2}>Usuarios</Heading>
      </Center>
      <Rectangular />
      <Box overflowX='auto'>
        <TableUsersBackoffice />
      </Box>
    </Box>
  );
};

export default UsersScreen;