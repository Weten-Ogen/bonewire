"use client"
import React from 'react'
import LogoImage from './logoimage'
import AvatarIcon from './avaatar'
import SideBar from '../sections/sidebar'
import { isLoggedIn } from '@/app/actions/authservice'
import { Button } from './button'
import Link from 'next/link'



const NavBar = () => {
    const userloggedin = isLoggedIn()
    return (
    <section className='fixed p-2 flex items-center justify-between bg-muted top-0 border border-b-black left-0 w-full h-[7vh] md:h-[6vh] z-50'>
      <LogoImage
      className=''/>

      <div  className='flex items-center gap-1 p-2'>        
        <div>
          { userloggedin &&
            <AvatarIcon className='uppercase'/>
          }{
            !userloggedin  &&
            <Link href="/signin">
              <span>log in</span>
            </Link>
           
          }
        </div>
        <SideBar>
            <AvatarIcon 
            className=''
            />
          
        </SideBar>
      </div>
    </section>
  )
}

export default NavBar
