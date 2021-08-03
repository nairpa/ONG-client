import React from 'react'
import { useQuery, useMutation } from 'react-query'
import { DeleteUser, GetUsers } from './UsersQuery'
import { useHistory } from 'react-router'
import { ToastAlertService } from '../../../services/AlertService/AlertService'
import TableUser from './TableUserComponent'
import { Box, Center, Heading } from '@chakra-ui/react'
import { USER_DELETED, USER_DELETED_TITLE } from '../../../consts/const'
import { Rectangular } from '../../../assets/css/globalStyles'

const BackofficeUserList = () => {
    const history = useHistory()

    const { isLoading, error, data, refetch } = useQuery('users', GetUsers, {
        refetchOnWindowFocus: false
    })
    const mutation = useMutation(async (id) => await DeleteUser(id), {
        onSuccess: refetch,
    })

    const handleDelete = (id) => {
        mutation.mutate(id)
    }

    if (mutation.isSuccess) {
        ToastAlertService({ icon: 'success', title: USER_DELETED_TITLE, text: USER_DELETED })
    }

    return (
        <Box marginLeft={{ sm: 0, md: 40, lg: 40 }}>
            <Box w='100%'>
                <Center>
                    <Heading fontFamily={'truculenta'} p={2} color={'#292929'}>Usuarios Registrados</Heading>
                </Center>
                <Rectangular />
            </Box>
            <Box overflowX='auto'>
                <TableUser
                    history={history}
                    isLoading={isLoading}
                    data={data}
                    handleDelete={handleDelete}
                    mutation={mutation}
                />
            </Box>
        </Box>
    )
}

export default BackofficeUserList