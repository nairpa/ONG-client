import React from 'react';
import PropTypes from 'prop-types'
import {Button} from '@chakra-ui/react'

const ButtonEdit = () => {

    return ( 
        <Button>Editar</Button>
    );
}

ButtonEdit.propTypes={
    organization: PropTypes.object.isRequired
}


export default ButtonEdit;