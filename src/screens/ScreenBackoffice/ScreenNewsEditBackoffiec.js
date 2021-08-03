import FormNews from '../../components/FormNews/FormNews'
import { useParams } from 'react-router-dom'
import clientAxios from '../../services/Axios/axios'
import React, { useState, useEffect } from 'react'
import LoadingComponent from '../../components/LoadingComponent'

export const ScreenNewsEditBackoffice = () => {
    const {id} = useParams()

    const [data, setData] = useState('')

    const getNews = async() => {
        const news = await clientAxios.get('/news')
        const newById = news.data.data.filter((el) => el.id == id)
        setData(newById)
    }
    
    useEffect(() => {
        getNews()
    }, [])

    return ( data ?
        <FormNews data={data}/> : <LoadingComponent />
    )
}