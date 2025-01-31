"use server"

import { pusherServer } from "@/lib/pusher"

export const createRoom = async() => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/chat/createroom`,
        {
          
          headers: {
            "Content-Type": "application/json",
          },

          cache: "no-store",
        }
      );
    
    const data =res.json()
   
    return data
}




export const sendMessage = async(message:string,roomId:string, userId:string) => {   
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/chat/createroom`,
        {
          
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({message,roomId,userId}),     
          cache: "no-store",
        }
      );
    
    
    // trigger event
    pusherServer.trigger(roomId,
         "incomming-message", 
    {
        message,     
    }
    )
}


