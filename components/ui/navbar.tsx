"use client"
import React from 'react'
import LogoImage from './logoimage'
import AvatarIcon from './avaatar'
import NavLinks from './navlink'
import SideBar from '../sections/sidebar'
import SignInBtn from './signInBtn'

const NavBar = () => {
    const auth = false;
    return (
    <section className='fixed p-2 flex items-center justify-between bg-muted top-0 border border-b-black left-0 w-full  md:h-[8vh] z-10'>
      <LogoImage
      className=''/>
      <div>
      <NavLinks
      className='hidden lg:flex'
      />
      </div>
      <div>

          {
              auth ? 
          <SideBar>
              <AvatarIcon 
              className=''
              imageurl='/public/images/profile.png'
              />
          </SideBar>
          : 
          <SignInBtn
          text='log in'
          className='capitalize text-md'
          />
          }
      </div>
    </section>
  )
}

export default NavBar
