"use server"

import { fetchData } from "./fetch"

// api call to create product
export const createProduct = async(payload:any) => {
    const product = await fetchData(payload)
    return product

}

export const getProduct = async(payload:any) => {
    const product = await fetchData(payload)
}

export const getProducts = async(payload:any) => {
    
    const products = await fetchData(payload)
}

export const deleteProductById = async(id:string) => {
    
}