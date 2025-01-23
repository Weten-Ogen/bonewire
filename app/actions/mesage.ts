"use server"

import { pusherServer } from "@/lib/pusher"



export const sendMessage = (message:string, roomId:string) => {    
    // trigger event
    pusherServer.trigger(roomId, "incomming-message", 
    {
        message
    }
    )
}


