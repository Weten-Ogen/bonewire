"use  client"
import React, { useEffect, useState } from 'react'
import LogoImage from './logoimage'
import AvatarIcon from './avaatar'
import SideBar from '../sections/sidebar'

import Link from 'next/link'
import NavBarLinks from './navbarlinks'
import { Button } from './button'
import { useRouter } from 'next/navigation'
import { useUserDetailsStore } from '@/store/userdetail'



const NavBar = () => {  
    const router = useRouter()
    const {user,getUserdetails} = useUserDetailsStore()

    useEffect(() => {
      getUserdetails()
    },[user])
    return (
    <div className='fixed p-2 flex items-center justify-between bg-muted top-0 border bg-white shadow-xl left-0 w-full h-[7vh] md:h-[6vh] z-50'>

      <LogoImage
      className=''/>
      <NavBarLinks className="hidden md:flex md:items-center  gap-4 "/>
      <div className='flex items-center '>
          <div  className='flex items-center gap-1 p-4 md:hidden'>        
            <SideBar >
                  <AvatarIcon 
                className=''
                />
            </SideBar>
          </div>
        <div className={`${user ? 'hidden' : 'block'}`}>
          <Button
              className='text-extraSmall font-poppins bg-white text-secondaryColor font-bold tracking-wider' 
              onClick={()=>router.push('/auth/signin')}  
              >
            log in
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
