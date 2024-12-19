'use client'
import React from 'react'
import {useChat} from 'ai/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MessageSquare, Text } from 'lucide-react'
import { cn } from '@/lib/utils'
import Chatboxform from '@/app/forms/chatboxform'

interface chatprops {
    className?: string
}

const Chatbox = (props:chatprops) => {
  return (
    <div className={cn('',props.className)}>

    <Sheet>
      <SheetTrigger  asChild>
        <Button size="lg" variant="outline" className='absolute rounded-full bottom-10 right-10 z-20  h-16 w-16  bg-orange-500'>
            <MessageSquare size={100} aria-label='chat' className='h-24 w-24 '/>
        </Button>
      </SheetTrigger>
      <SheetContent className='h-screen w-full  md:w-[w-[40%]]'>
        <SheetHeader>
          <SheetTitle>Chat us for Payments and Support</SheetTitle>
          <SheetDescription>
            Text us with all your questions and we are here to make your shopping life here easier.
          </SheetDescription>
        </SheetHeader>
        <div className='min-h-[75vh]'>
        
        </div>
        <Chatboxform />
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  )
}

export default Chatbox




