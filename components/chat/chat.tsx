"use client"
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
import { cn } from '@/lib/utils'
import React from 'react'
import ChatBox from "./chatbox"
import { MessageCircle, MessageCircleCode, MessageCircleDashedIcon, MessageSquare, MessageSquareCode } from "lucide-react"

interface chatprops {
  className?: string
}

const Chat = (props:chatprops) => {
  return (
    <div className={cn("relative max-w-full",props.className)}>
      <Sheet>
      <SheetTrigger asChild>
        <Button 
        className="absolute right-10 bottom-0 rounded-full  text-5xl z-30" 
        variant="outline">
          <MessageCircleCode
         
          size={72} 
          className="text-orange-500 text-5xl"/>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="max-w-full w-full ">
        <SheetHeader>
          <SheetTitle>Bonewire</SheetTitle>
          <SheetDescription>
            Please what do you need help with
          </SheetDescription>
        </SheetHeader>
        <div className="h-[85vh] border rounded-lg">

        </div>
        <ChatBox/>
      </SheetContent>
    </Sheet>      
    </div>
  )
}

export default Chat


