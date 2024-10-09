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
                <div className='flex items-center gap-0 '>
                    <item.icon  />
                    <Links 
                    className='uppercase'
                    type="link"
                    key= {item.label}
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
