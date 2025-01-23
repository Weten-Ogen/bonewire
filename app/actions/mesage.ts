"use server"

import { pusherServer } from "@/lib/pusher"
import Router from "next/router"

export const createRoom = async(roomId: string) => {
    const router = Router
    const room = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/chat/createroom`)
    router.push(`/chat/${roomId}`)
}

export const sendMessage = (message:string, roomId:string) => {    

    // trigger event
    pusherServer.trigger(roomId,"incomming-message", 
    {
        message
    }
    )
}


