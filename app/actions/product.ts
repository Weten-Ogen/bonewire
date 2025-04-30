"use server"

import {prisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createProduct(data:any) {
    const product = await prisma.product.create({
        data
    })

    revalidatePath('/products')
}

export async function getProductById(id:string){
    const product = await prisma.product.findFirst({
        where: {
            id
        }
    })
    return product
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