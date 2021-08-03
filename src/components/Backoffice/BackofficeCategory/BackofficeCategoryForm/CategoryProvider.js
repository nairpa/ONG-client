import React, { useContext, useState } from 'react'
import clientAxios from '../../../../services/Axios/axios'

const CategoryContext = React.createContext()

// Hook propio para no estar llamando y usando 
// todo el tiempo useContext en todos los children
const useContextCall = () => {
  return useContext(CategoryContext)
}

const CategoryProvider = ({ children }) => {

  const [categories, setCategories] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [id, setId] = useState('')

  const getCategories = async () => {
    const response = await clientAxios.get('/categories')
    const data = response.data.data
    setCategories([...data])
  }

  const addCategory = async () => {
    await clientAxios({
      method: 'POST',
      url: '/categories',
      data: {
        name, description
      }
    })
    getCategories()
    setName('')
    setDescription('')
  }

  const UpdateCategory = async () => {
    await clientAxios({
      method: 'PATCH',
      url: `/categories/${id}`,
      data: {
        name, description
      }
    })
    getCategories()
    setName('')
    setDescription('')
  }
  /* Esta funcion pasarla al boton editar de la lista de categorias,
   lo que hace es, recibir sus datos y cargarlos en las variables
   globales */

  const editCategory = (id) => {
    // eslint-disable-next-line eqeqeq
    const category = categories.filter(item => item.id == id)
    setName(category[0].name)
    setDescription(category[0].description)
    setId(category[0].id)
  }

  return (
    <CategoryContext.Provider value={{
      addCategory,
      UpdateCategory,
      getCategories,
      editCategory,
      categories,
      name,
      description,
      setId,
      id,
      setName,
      setDescription,
    }}>
      {children}
    </CategoryContext.Provider>
  )
}

export {
  CategoryProvider,
  useContextCall
}
