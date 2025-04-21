"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Message from './messageui'
import { pusherClient } from '@/lib/pusher'
import { useUserDetailsStore } from '@/store/userdetail'

import { useRouter } from 'next/navigation'

interface chatprops {
  roomId : string
}
interface messagprops {
  message: string, 
  roomId: string
}
const Chat = (props: chatprops) => {
  const router = useRouter()

  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  const [room ,setRoomId] = useState<string>('')
  const [sender ,setSender] = useState<string>('')

  const {user,getUserdetails} = useUserDetailsStore();

  const onSendMessage = async() => {
   
 
  }

  useEffect(() => {
    getUserdetails()
    if(user){
      setSender(user.id)
    }
    setRoomId(props.roomId)
    pusherClient.subscribe(room);
    pusherClient.bind("incomming-message",(data:{message:string}) => {
      
      setMessages((prev:any) => [...prev, data.message])
      
      setMessage('')
    })
    return () => pusherClient.unsubscribe(room)

}, [])

  const uniqueMessages = messages.filter(( value,index, self) =>{ return self.indexOf(value) === index })

  return (
    <div className='w-full h-full items-center md:max-w-lg mx-auto p-4 md:p-8 mt-20  bg-transparent '>
      <div className="w-full h-full   min-h-[68vh] overflow-y-auto rounded-lg p-2 flex flex-col gap-y-2 border border-black z-30">
          {!uniqueMessages.length ? (
            <div className="text-center text-gray-500">No messages yet</div>
          ):(
            uniqueMessages.map((item,index:number) => (
              <Message 
              key={item}
              message={item}
                
               />
            )))
          }
        </div>
      <div className="flex items-center w-full p-4 gap-2">
        <Input 
          placeholder='type your message here ...'
          value={message}
          className='w-full flex-1 bg-transparent p-4 h-full border-none rounded-none'
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button 
        onClick={onSendMessage}
        className=' block rounded-none h-full '>
          <Send  
          size={40}

          />
        </Button>
      </div>
    </div>
  )
}

export default Chat