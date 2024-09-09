import { cn } from '@/lib/utils'
import { navbarprops } from '@/types/next'
import React from 'react'
import Logo from './logo'
import staticlist from '@/constants/staticlist'
import NavLinks from './navlinks'
import AvaTar from './avaatar'
import MobileNav from './mobilenav'


const NavBar = ({className}:navbarprops) => {
  

  return (
    <nav className={cn('fixed w-full flex items-center bg-gray-100 justify-between z-50',className)}>
      {/* 
      on desktops :
            - logo 
            -avatar
            -navlinks
      on mobile :
            - logo
            -avatar
            -menubtn
      
      */}
      <Logo 
      className='text-black'
      label='Bonewire'
      />
      <ul className='hidden md:flex md:flex-center md:gap-2 text-sm'>
        {staticlist.navlinklist.map(item => {
            return (
                <NavLinks 
                key={item.label}
                label={item.label}
                reff={item.reff}
                className='hidden md:flex md:items-center gap-2 p-2'
                iconsClass='text-black'
                navicon={item.navicon}
                />
            )
        })}
      </ul>
      <div className='flex items-center gap-2 flex-row-reverse '>
      <MobileNav 
       />
        <AvaTar 
        avatarimageclass=''
        className=''
        username="marcus"
        />
      </div>
    </nav>
  )
}

export default NavBar
