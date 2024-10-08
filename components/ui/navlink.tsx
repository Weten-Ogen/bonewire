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
      <ul className="flex items-center gap-2 p-2">
        {
            navlinks.map(item => {
                return (
                    <Links 
                    className=''
                    key= {item.label}
                    href={item.href}
                    text={item.label}
                    />
                )
            })
        }
      </ul>
    </nav>
  )
}

export default NavLinks
