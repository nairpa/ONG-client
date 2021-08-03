// imports from react.
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//imports fron services.
import { ToastAlertService } from '../../../services/AlertService/AlertService';
import clientAxios from '../../../services/Axios/axios';
import deleteUser from '../../../services/Axios/UsersQueries/deleteUser';

// import from context.
import { editUser, logout } from '../../../store/UserStore/UserStore';
import { UserContext } from './UserContext';

import { ALERT_ERROR, ALERT_SUCCESS, SUCCESS_PROFILE_UPDATED, ERROR_PROFILE_UPDATED, SUCCESS_PROFILE_DELETED, ERROR_PROFILE_DELETED } from '../../../consts/const';

const UserState = (props) => {
  const userStore = useSelector(state => state.user);
  const [state, setState] = useState({});

  const dispatch = useDispatch();

  const profile = {
    user: {
      name: userStore.name,
      lastname: userStore.lastname,
      email: userStore.email,
      role: userStore.role,
      profileImg: 'https://www.gobernaciondelmagdalena.gov.co/wp-content/uploads/2021/04/sin_foto.png'
    },
    preferences: {
      imgBackgroundUrl: "https://fondosmil.com/fondo/17010.jpg"
    },
    account: true
  }

  useEffect ( () => {
    setState (profile);
  } ,[userStore]);

  const updateUser = async (user) => {
    setState({...state, user});
    dispatch(editUser (user));

    try {
      await clientAxios.put ('users/' + userStore.id, user);
      ToastAlertService ({icon: ALERT_SUCCESS, title: SUCCESS_PROFILE_UPDATED});
    } catch {
      ToastAlertService ({icon: ALERT_ERROR, title: ERROR_PROFILE_UPDATED});
    }
  }

  const updatePreferences = (data) => {
    const newPreferences = {
      imgBackgroundUrl: data.imgBackgroundUrl,
      profileImgUrl: data.profileImg
    }
    setState({
      ...state,
      preferences: newPreferences
    })
  }

  const deleteAccount = async () => {
    
    try {
      await deleteUser (userStore.id);
      ToastAlertService ({icon: ALERT_SUCCESS, title: SUCCESS_PROFILE_DELETED});
    } catch {
      ToastAlertService ({icon: ALERT_ERROR, title: ERROR_PROFILE_DELETED});
    }
    
    setState({...state, account: false });
    dispatch(logout());
    window.location.href="/";
  }

  return (
    <UserContext.Provider value={{
      user: state.user,
      preferences: state.preferences,
      account: state.account,
      updateUser,
      updatePreferences,
      deleteAccount
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
