"use  client"
import React, { useState } from 'react'
import LogoImage from './logoimage'
import AvatarIcon from './avaatar'
import SideBar from '../sections/sidebar'
import { getUserInfo, isLoggedIn } from '@/app/actions/authservice'
import Link from 'next/link'
import NavBarLinks from './navbarlinks'



const NavBar = () => {  
  const [userloggedIn , setUserloggedIn]  = useState<boolean |undefined>(isLoggedIn()) 
  const user = getUserInfo()
  const [username, setUsername]  = useState<any>()

  console.log(username)
    return (
    <div className='fixed p-2 flex items-center justify-between bg-muted top-0 border border-b-black left-0 w-full h-[7vh] md:h-[6vh] z-50'>

      <LogoImage
      className=''/>
      <NavBarLinks className="hidden md:flex md:items-center  gap-4 "/>
      <div  className='flex items-center gap-1 p-4'>        
        <SideBar>
              <AvatarIcon 
            className=''
            />
        </SideBar>
      </div>
    </div>
  )
}

export default NavBar
