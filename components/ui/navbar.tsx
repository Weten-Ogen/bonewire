import React from 'react'
import LogoImage from './logoimage'
import AvatarIcon from './avaatar'
import NavLinks from './navlink'

const NavBar = () => {
  return (
    <section className='fixed flex items-center justify-between bg-muted top-0 left-0 w-full h-[8vh] z-10'>
      <LogoImage
      className='p-2'/>
      <div>
      <NavLinks
      className='hidden md:flex'
      />
      </div>
      <AvatarIcon 
      className=''/>
    </section>
  )
}

export default NavBar
