"use client"
import React, { useEffect } from 'react'
import { Sheet,SheetClose,SheetContent,SheetTrigger,SheetPortal,SheetHeader,SheetTitle } from '../ui/sheet'
import LogoImage from '../ui/logoimage'
import { Button } from '../ui/button'
import { navlinks } from '@/lib/constants'
import NavLinks from '../ui/navlink'
import { LogOut, Menu } from 'lucide-react'
import { TypographyH2 } from '../typography/h2'
import Link from 'next/link'
import { getUserInfo } from '@/app/actions/authservice'

interface mobilenavprops{
    children:React.ReactElement
}


const SideBar = (props:mobilenavprops) => {
  const handleRole =() => {
    const user  = getUserInfo();
    console.log(user)
  }
  useEffect(() => {
    handleRole()
  })
  return (
    <Sheet>
      <SheetTrigger className='cursor-pointer' asChild>
        <Menu 
        size={32}
        />
      </SheetTrigger>
      <SheetContent side={'left'} className=' w-full  md:w-[400px] sm:w-[540px] ' >
      <div className='flex items-center'>
        <LogoImage
        className=''
        imageurl=''
        />
        <TypographyH2 className='text-lg f'>
          Bonewire
        </TypographyH2>
      </div>
      <div className='flex flex-col  gap-4 mt-5 pl-4'>
        {navlinks.map(item => {
          return (
            <SheetClose  asChild key={item.label}>
            <Link href={item.href}  className='flex gap-4 p-2 '>
              <item.icon/>
              <p className='uppercase'>{item.label}</p>
            </Link>
            </SheetClose> 
          )
        })}
      </div>
      <div className='flex gap-4 items-center justify-between w-full'>
        <p className=''>log out</p>
        <LogOut/>
      </div>
      
      </SheetContent>
    </Sheet>
  )
}

export default SideBar
