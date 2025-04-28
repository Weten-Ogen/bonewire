"use  client"
import React, { useEffect, useState } from 'react'
import LogoImage from './logoimage'
import SideBar from '../sections/sidebar'
import NavBarLinks from './navbarlinks'
import { Button } from './button'
import { usePathname, useRouter } from 'next/navigation'
import { useUserDetailsStore } from '@/store/userdetail'
import { login, logout, getSession } from '@/app/actions/auth'
import { Avatar, AvatarImage } from './avatar'
import AvatarIcon from './avaatar'
import { toast, useSonner } from 'sonner'


const NavBar = () => {  
    const router = useRouter()
    const pathname = usePathname()
    const {user,session,getUserdetails} = useUserDetailsStore()
    useEffect(() => {
      if(session) toast("you succcessfully login")
      getUserdetails()
    },[])
    return (
    <div className='fixed p-2 flex items-center justify-between bg-muted top-0 border bg-white shadow-xl left-0 w-full h-[7vh] md:h-[6vh] z-50'>

      <LogoImage
      className=''/>
      <NavBarLinks className="hidden md:flex md:items-center  gap-4 "/>
      <div className='flex items-center '>
      {session ?
          <div  className='flex items-center '>        
            <SideBar >
                 <AvatarIcon
                    src={session?.user?.image as string}
                    alt={session?.user?.name as string}

                 />
            </SideBar> 
            <form action={logout}>
              <Button type='submit'>
                log out
              </Button>
            </form>
          </div>
          :
        <form action={async() =>{login(pathname)}}  className={`${user ? 'hidden' : 'block'}`}>
            
            <Button
            type='submit'
            className='text-extraSmall font-poppins bg-white text-secondaryColor font-bold tracking-wider' 
            
            >
            log in
          </Button>
        </form>
      }
      </div>
    </div>
  )
}

export default NavBar
