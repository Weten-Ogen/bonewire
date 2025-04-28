"use server"
import {prisma} from '@/lib/prisma'

export async function  createChat(id:string,data:any) {
    const  chat = await prisma.chat.create({
        data:data
    })
}

export async function deleteChat(id:string){
    const chat = await prisma.chat.delete({
        where:{
            id
        },
    })
}
