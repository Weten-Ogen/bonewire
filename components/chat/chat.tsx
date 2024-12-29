'use client'

import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  sender: string
}

export default function Chat() {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    const initSocket = async () => {
      // Initialize socket connection
      await fetch('/api/socket')
      const newSocket = io()

      newSocket.on('connect', () => {
        console.log('Connected to Socket.IO server')
        setConnected(true)
      })

      newSocket.on('message', (message: Message) => {
        setMessages((prev) => [...prev, message])
      })

      newSocket.on('disconnect', () => {
        console.log('Disconnected from Socket.IO server')
        setConnected(false)
      })

      setSocket(newSocket)

      return () => {
        newSocket.close()
      }
    }

    initSocket()
  }, [])

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() && socket) {
      const message: Message = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'user'
      }
      socket.emit('message', message)
      setInputMessage('')
    }
  }

  return (
    <Card className=" w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Chat Room
          <span className={`h-3 w-3 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={sendMessage} className="flex w-full gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            disabled={!connected}
          />
          <Button type="submit" disabled={!connected}>
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

