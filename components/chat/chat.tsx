'use client'

import React, { useState } from 'react'
import { useChat } from 'ai/react'
import { Send, Minimize2, Maximize2, X, MessageCircle } from 'lucide-react'
import { AIAssistantProps } from '@/types/chat'
import { Button } from '../ui/button'

const AIAssistant: React.FC<AIAssistantProps> = ({ initialMessages = [] }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ initialMessages })
  const [isMinimized, setIsMinimized] = useState<boolean>(false)
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [close , setClose] = useState<boolean>(true)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsTyping(true)
    handleSubmit(e)
    setIsTyping(false)
  }

  return (
    <div className='w-full relative'>
      {
        close ? <Button 
         className='absolute bottom-0 right-5 '
        onClick={() => setClose(prev => !prev)}>
          <MessageCircle/>
        </Button>:

    <div className={`fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out ${isMinimized ? 'h-14' : 'h-[32rem]'}`}>
      <div className="bg-yellow-400 p-3 rounded-t-lg flex justify-between items-center">
        <h2 className="text-white font-semibold">AI Assitant</h2>
        <div className="flex space-x-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="text-white hover:text-yellow-100">
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </button>
          <button
          onClick={() => setClose(prev=> !prev)}
          className="text-white hover:text-yellow-100">
            <X size={18} />
          </button>
        </div>
      </div>
      {!isMinimized && (
        <>
          <div className="h-[calc(100%-8rem)] overflow-auto p-4 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded-lg ${
                    m.role === 'user'
                      ? 'bg-yellow-400 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 max-w-[80%] p-2 rounded-lg">
                  Typing...
                </div>
              </div>
            )}
          </div>
          <form onSubmit={onSubmit} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              <button
                type="submit"
                className="bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                <Send size={18} />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  }
    </div>
  )
}

export default AIAssistant

