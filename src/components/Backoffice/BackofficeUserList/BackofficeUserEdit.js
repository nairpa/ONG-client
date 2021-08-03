import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from 'react-query'
import { useParams, useHistory } from 'react-router-dom'
import FormEditUser from './FormEditUserComponent'
import { ToastAlertService } from '../../../services/AlertService/AlertService'
import { EditUser, GetUser } from './UsersQuery'
import { Center, Box } from "@chakra-ui/react"
import { USER_EDITED, USER_EDITED_TITLE } from '../../../consts/const'

const BackofficeUserEdit = () => {
  let history = useHistory();

  const { id } = useParams()
  const [user, setUser] = useState({ name: '', lastname: '', email: '', 'roleId': '' })
  const [showButton, setShowButton] = useState(false)

  const { isLoading } = useQuery(['user', id], async () => await GetUser(id).then(user => setUser(user.user)), { refetchOnWindowFocus: false })
  const mutation = useMutation(async (user) => await EditUser(user))

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value
    })
    setShowButton(true)
  }

  const cancelEdit = () => {
    history.push('/backoffice/users');
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ id: id, user: user })
    console.log(user);
  }

  if (mutation.isSuccess) {
    ToastAlertService({ icon: 'success', title: USER_EDITED_TITLE, text: USER_EDITED })
    history.push('/backoffice/users');
  }

  return (
    <Box w='100%' h='90vh'>
      <Center w='100%' h='100%'>
        {
          user && <FormEditUser
            mutation={mutation}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            user={user}
            showButton={showButton}
            cancelEdit={cancelEdit}
          />
        }
      </Center>
    </Box>
  )
}

export default BackofficeUserEdit