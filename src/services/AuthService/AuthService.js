import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CardAlertService, ToastAlertService} from '../AlertService/AlertService';
import { login } from '../../store/UserStore/UserStore';
import { ALERT_ERROR, ERROR_QUERY_TITLE, HTTP_ERROR_406, ERROR_MAIL_REGITER, ERROR_SERVER} from '../../consts/const';
import clientAxios from '../Axios/axios';

export const AuthContextService = createContext();

export const AuthProviderService = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [auth, setAuth] = useState({success: false, msg: {show: false, info: { icon: '', title: '', text: ''}}});

  useEffect(() => {
    if (auth.success) {
      history.push('/');
    }
    if (auth.msg.show) {
      CardAlertService(auth.msg.info);
    }
  })

  const onSubmitLogin = async (data, res) => {
    try {
      const query = await clientAxios.post('/auth/login', data);        
      localStorage.setItem ("token", query.data.token);
      const userData = await clientAxios.get('/auth/me', { headers: {Authorization: query.data.token}});
      dispatch(login(userData.data));

      setAuth({...auth, success: true, msg: {show: false, info: {icon: '', title: '', text: ''}}});
    } catch (error) {
      setAuth({...auth, success: false, msg: {show: true, info: {icon: ALERT_ERROR, title: ERROR_QUERY_TITLE, text: error}}});
    }  
  }

  const onSubmitUser = async(data) =>{
    try {
      const query = await clientAxios.post('/auth/register', data);
      localStorage.setItem ("token", query.data.token);
      const userData = await clientAxios.get('/auth/me', { headers: {Authorization: query.data.token}});;
      dispatch(login(userData.data));

      setAuth({...auth, success: true, msg: {show: false, info: {icon: '', title: '', text: ''}}});
    } catch (error) {

      if (error.message === HTTP_ERROR_406){
        return ToastAlertService({icon: ALERT_ERROR, title: ERROR_MAIL_REGITER});
      }
      else {
        return ToastAlertService({icon: ALERT_ERROR, title: ERROR_SERVER});
      }
    }
  }
    
  return (
    <AuthContextService.Provider value={{onSubmitLogin, onSubmitUser}}>
      {props.children}
    </AuthContextService.Provider>
  );
}