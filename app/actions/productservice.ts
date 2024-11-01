"use server"

import { fetchData } from "./fetch"


export const getProduct = async(payload:any) => {
    const product = await fetchData(payload)
}

export const getProducts = async(payload:any) => {
    
    const products = await fetchData(payload)
}

export const createProduct = async(payload:any) => {
   

}

export const deleteProductById = async(id:string) => {
    const payload = {
        method: "POST",
        route: "/products/delete/${id}",
    }
}