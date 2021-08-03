// imports from react.
import React from "react";

// imports from externals libraries.
import { Box } from "@chakra-ui/react";

// imports from locals files.
import EditOrganizationForm from '../../../components/Backoffice/BackofficeEditOrganization/EditOrganizationForm';
import EditSocialMedia from '../../../components/Backoffice/BackofficeEditOrganization/EditSocialMediaForm';

const ScreenEditOrganization = () => {

  return (
    <Box marginLeft={{sm: 0, md: 40, lg: 40}}>
      <Box maxW="600px" w="90%" m="auto">
        <EditOrganizationForm/>
      </Box>

      <Box maxW="600px" w="90%" m="auto" mb="4rem">
        <EditSocialMedia/>   
      </Box>
    </Box>
  );
}

export default ScreenEditOrganization;
