"use client"
import React from 'react'
import LogoImage from './logoimage'
import AvatarIcon from './avaatar'
import NavLinks from './navlink'
import SideBar from '../sections/sidebar'
import SignInBtn from './signInBtn'
import { isLoggedIn, removeUser } from '@/app/actions/authservice'
import { useRouter } from 'next/navigation';
import { Button} from './button'
import Link from 'next/link'

const NavBar = () => {
    const userloggedin = isLoggedIn()
    const router = useRouter();
    const logout = () => {
      removeUser()
      router.push('/signin')
      router.refresh()
    }
    return (
    <div className='fixed p-2 flex items-center justify-between bg-muted top-0 border border-b-black left-0 w-full  md:h-[8vh] z-10'>
      <LogoImage
      className=''/>
      
      <div  className='flex items-center gap-1 p-2'>
        {!userloggedin ? 
        <Link href="/signin">log in </Link>:
        <Button onClick={logout}> 
          log out
        </Button>
        
        }
          <SideBar>
              <AvatarIcon 
              className=''
              imageurl='/public/images/profile.png'
              />
          </SideBar>
      </div>
    </div>
  )
}

export default NavBar
