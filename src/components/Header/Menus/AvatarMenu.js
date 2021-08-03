// imports from react.
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// imports from externals libraries. 
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

// imports from local files.
import { logout } from '../../../store/UserStore/UserStore';

// imports styles.
import { ArrowDonw } from '../headerStyles';

import { ROLE_ID_ADMIN } from '../../../consts/const';

const BackofficeButton = ({ role }) => {
  if (role === ROLE_ID_ADMIN) {
    return (
      <Link to="/backoffice">
        <MenuItem>Backoffice</MenuItem>
      </Link>
    );
  }
  return null;
}

function AvatarMenu() {
  const { roleId } = useSelector (state => state.user); 
  const dispatch = useDispatch();

  const closeSesion = () => {
    dispatch (logout());
  }

  return (
    <div>
      <Menu>
        <MenuButton>
          <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <ArrowDonw className="fas fa-sort-down"></ArrowDonw>
        </MenuButton>
  
        <MenuList>
          <Link to="/user-profile">
            <MenuItem>Perfil</MenuItem>
          </Link>
          <BackofficeButton role={roleId}/>
          <MenuItem onClick={closeSesion}>Cerrar Sesion</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default AvatarMenu;