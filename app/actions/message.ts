"use server"
import {prisma} from '@/lib/prisma'


export async function createMessage(data:any) {
    const message = await prisma.message.create({
        data:data
    })
}
export async function getMessages() {
    const messages = await prisma.message.findMany()
    
}
export async function deleteMessage(id:string) {
    const message = await prisma.message.delete({
        where:{
            id
        }
    })
}
export async function updateMessage(id:string,data:any) {
    const message = await prisma.message.update({
        where: {
            id
        },
        data:data
    })
}