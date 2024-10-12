"use client"
import React from 'react'
import { Sheet,SheetClose,SheetContent,SheetTrigger,SheetPortal,SheetHeader,SheetTitle } from '../ui/sheet'
import LogoImage from '../ui/logoimage'
import { Button } from '../ui/button'

interface mobilenavprops{
    children:React.ReactElement
}

const SideBar = (props:mobilenavprops) => {
  return (
    <Sheet>
      <SheetTrigger className='cursor-pointer' asChild>
        <Button variant="outline" className='p-0 m-0 rounded-full'>
       {props.children}
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className='w-[400px] sm:w-[540px] ' > 
      <div className='flex items-center justify-between'>
        <LogoImage
        className=''
        imageurl=''
        />

      </div>
      </SheetContent>
    </Sheet>
  )
}

export default SideBar
