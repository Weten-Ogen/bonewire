"use server"

import { prisma } from "@/lib/prisma"



export async function getUser(id:string) {
    const user =await prisma.user.findFirst({
        where: {
            id
        }
    })
    return user
    
}
export async function deleteUser(id:string) {
    const user = await prisma.user.delete({
        where:{
            id
        }
    })
    return user
}
export async function updateUser(id:string,data:any) {
    const user = await prisma.user.update({
        where: {
            id
        },
        data:data
    })
    return user
}