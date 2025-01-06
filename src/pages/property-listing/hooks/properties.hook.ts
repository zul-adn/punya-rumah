"use client"
import { RootState } from "@/store/Store"
import { useSelector } from "react-redux"
import { useGetPropertiesMutation } from "../services/properties.api"
import { useEffect } from "react"


export const useProperties = () => {
    const properties = useSelector((state: RootState) => state.propertiesState)
    const [ getProperties] = useGetPropertiesMutation()

    useEffect(() => {
        getPropertiesHook()
    }, [])

    const getPropertiesHook = async () => {
        await getProperties({page: 1, limit: 20})
    }   

    return {
        properties: properties.properties,
        pagination: properties.pagination,
        loading: properties.loading
    }

}