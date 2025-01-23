"use client"
import { sendMessage } from '@/app/actions/mesage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Message from './messageui'
import { pusherClient } from '@/lib/pusher'
import { useUserDetailsStore } from '@/store/userdetail'
import { getUserInfo } from '@/app/actions/authservice'
import { useRouter } from 'next/navigation'

const Chat = () => {
  const router = useRouter()
  const userInfo = getUserInfo()
  if(!userInfo) {
    router.push('/auth/signin')
  }
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  
 

  const {user} = useUserDetailsStore();

  const onSendMessage = async() => {
    await sendMessage(message)
  }

  useEffect(() => {
   
    pusherClient.subscribe('messaging');
    pusherClient.bind("incomming-message",(data: {message:string,email:string}) => {
      console.log(message)
      setMessages((prev) => [...prev, data.message])
      
      setMessage('')
    })
    return () => pusherClient.unsubscribe('messaging')

}, [])

  const uniqueMessages = messages.filter(( value,index, self) => self.indexOf(value) === index )

  return (
    <div className='w-full h-full items-center md:max-w-lg mx-auto p-4 md:p-8 mt-20  bg-transparent '>
      <div className="w-full h-full   min-h-[68vh] overflow-y-auto rounded-lg p-2 flex flex-col gap-y-2 border border-black z-30">
          {!uniqueMessages.length ? (
            <div className="text-center text-gray-500">No messages yet</div>
          ):(
            uniqueMessages.map((message, index) => (
              <Message 
              key={index} 
              message={message}
             
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