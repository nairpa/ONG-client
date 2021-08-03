// imports from react.
import React from 'react';

// imports from externals libraries.
import { Center, Box, Heading, SimpleGrid } from '@chakra-ui/react';

import TableCategoriesBackoffice from '../../../components/Backoffice/BackofficeCategory/TableCategoriesBackoffice';
import { Rectangular } from '../../../assets/css/globalStyles';
import { CategoryProvider } from '../../../components/Backoffice/BackofficeCategory/BackofficeCategoryForm/CategoryProvider'
import CategoryForm from '../../../components/Backoffice/BackofficeCategory/BackofficeCategoryForm/CategoryForm';

const ScreenCategories = () => {

  return (
    <CategoryProvider>
      <Box marginLeft={{ sm: 0, md: 40, lg: 40 }}>
        <Center>
          <Heading m={2} p={2} fontFamily={'truculenta'}>Categorías</Heading>
        </Center>
        <Rectangular />
        <SimpleGrid>
          <Center>
            <Box width="40%">
              <CategoryForm />
            </Box>
            <Box width="50%">
              <TableCategoriesBackoffice />
            </Box>
          </Center>
        </SimpleGrid>
      </Box>
    </CategoryProvider>
  );
}

export default ScreenCategories;