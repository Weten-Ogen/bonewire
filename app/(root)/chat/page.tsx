"use client"
import { sendMessage } from '@/app/actions/mesage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Message from './messageui'
import { pusherClient } from '@/lib/pusher'

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');

  const onSendMessage = async() => {
    await sendMessage(message)
  }

  useEffect(() => {   
    pusherClient.subscribe('messaging');
    pusherClient.bind("incomming-message", (data: {message:string}) => {
      setMessages((prev) => [...prev, data.message])
      setMessage('')
    })
    return () => pusherClient.unsubscribe('messaging')

}, [])

  const uniqueMessages = messages.filter(( value,index, self) => self.indexOf(value) === index)
  return (
    <div className='w-full h-full items-centerjustify-center p-6 mt-20   '>
      <div className="w-full h-full overflow-y-auto p-4 flex flex-col gap-y-4">
          {!uniqueMessages.length ? (
            <div className="text-center text-gray-500">No messages yet</div>
          ) : (
            uniqueMessages.map((message, index) => (
              <Message key={index} message={message} />
            ))
          )}
        </div>
      <div className="flex items-center w-full p-4">
        <Input 
          placeholder='type your message here ...'
          value={message}
          className='w-full flex-1 bg-transparent h-full border-none rounded-none'
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button 
        onClick={onSendMessage}
        className='rounded-none h-full '>
          <Send  
          size={24}
          />

        </Button>
      </div>
    </div>
  )
}

export default Chat