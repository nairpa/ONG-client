import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../ContextUser/UserContext'

const UseForm = () => {
  const { user, updateUser } = useContext(UserContext);

  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  useEffect( () => {
    setData(user);
  }, [user]);

  const showButton = () => { setShow(true) }
  const hideButton = () => { setShow(false) }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    showButton();
  }

  const handleSubmit = () => {
    updateUser(data);
    hideButton();
  }

  return [handleChange, handleSubmit, show];
}

export default UseForm;