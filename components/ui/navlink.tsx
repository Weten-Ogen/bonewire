"use client"
import React from 'react'
import { navlinks } from '@/lib/constants'
import Links from './Links'
import { cn } from '@/lib/utils'


interface navlinksprops{
    className? : string
}

const NavLinks = (props:navlinksprops) => {
  return (
    <nav className={cn('',props.className)}>
      <ul className="flex items-center ">
        {
            navlinks.map(item => {
                return (
                <div key={item.label} className='flex items-center gap-0 '>
                  <div>
                    <item.icon  />
                  </div>
                    <Links 
                    className='uppercase'
                    type="link"
                    
                    href={item.href}
                    text={item.label}
                    />
                </div>
                )
            })
        }
      </ul>
    </nav>
  )
}

export default NavLinks
