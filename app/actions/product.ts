"use server"

import {prisma} from "@/lib/prisma"

export async function createProduct(data:any) {
    const product = await prisma.product.create({
        data
    })
    return 
}
export async function getProducts() {
    const products = await prisma.product.findMany()
    return products
}
export async function deleteProduct(id:string) {
    const product = await prisma.product.delete({
        where:{
            id
        }
    })
}
export async function updateProduct(id:string,data:any) {
    const product = await prisma.product.update({
        where:{
            id
        },
        data:data
    })
}