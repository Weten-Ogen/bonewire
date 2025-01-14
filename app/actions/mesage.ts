"use server"

import { pusherServer } from "@/lib/pusher"

export const sendMessage = (message:string) => {    

    // trigger event
    pusherServer.trigger('messaging',"incomming-message", {
        message
    })
}


