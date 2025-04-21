"use client"
import React, { useEffect, useState } from 'react'
import { Sheet,SheetClose,SheetContent,SheetTrigger,SheetPortal,SheetHeader,SheetTitle } from '../ui/sheet'
import LogoImage from '../ui/logoimage'
import { navlinks } from '@/lib/constants'
import { LogOut, Menu } from 'lucide-react'
import { TypographyH2 } from '../typography/h2'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface mobilenavprops{
    children:React.ReactElement
}


const SideBar = (props:mobilenavprops) => {
   const [usedetails, setUserdetails] = useState<any>()

  const router = useRouter()
  
  const filternavlinks = navlinks.filter(item => item.label !== "Admin" )
  
  return (
    <Sheet>
      <SheetTrigger className='cursor-pointer' asChild>
        <Menu 
        size={32}
        className='h-10 w-10'
        />
      </SheetTrigger>

      <SheetContent 
      side={'left'} 
      className=' w-full  md:w-[400px] sm:w-[540px] ' >

      <div className='flex   relative '>
        <div>

        <LogoImage
        className=''
        
        />
        </div>
        <TypographyH2 className='text-primaryFont font-poppins font-bold'>
          Bonewire
        </TypographyH2>
      </div>
      <div>
      {
        usedetails?.role == "admin" ?
        <div className='flex flex-col  gap-4 mt-5 pl-4'>
        {navlinks.map(item => {
          return (
            <SheetClose  asChild key={item.label}>
            <Link href={item.href}  className='flex gap-4 p-2 '>
              <div>
              <item.icon/>
              </div>
              <p className='uppercase text-extraSmall  font-poppins'>{item.label}</p>
            </Link>
            </SheetClose> 
          )
        })}
      </div>
      :
      <div className='flex flex-col  gap-4 mt-5 pl-4'>
        {filternavlinks.map(item => {
          return (
            <SheetClose  asChild key={item.label}>
            <Link href={item.href}  className='flex gap-4 p-2 '>
              <div>
              <item.icon/>
              </div>
              <p className='uppercase'>{item.label}</p>
            </Link>
            </SheetClose> 
          )
        })}
      </div>

}
</div>
      <div className='flex gap-4 items-center justify-between w-[90%] mx-auto absolute bottom-0  p-4 '>
        <p className='text-wrap'>
         
        </p>
        <div className='flex gap-2'>
          <SheetClose asChild>
          <p  className='flex items-center gap-2'>
          <p className=''>Log out</p>
          <LogOut/>
          </p>
          </SheetClose>
        </div>
      </div>
      
      </SheetContent>
    </Sheet>
  )
}

export default SideBar
