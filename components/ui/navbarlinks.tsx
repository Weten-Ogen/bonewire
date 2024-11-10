"use client"
import React from 'react'
import { navlinks } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface compprops {
    className?:string
}

const NavBarLinks = (props:compprops) => {
    const pathName = usePathname()
    return (
    <div className={cn('',props.className)}>
      {
        navlinks.map(item=>{
            return <Link  
            className={` font-bold hover:text-yellow-500 ${pathName === item.href ? "text-yellow-500   duration-500  ease-out": "text-black"}`}
            key={item.label} 
            href={item.href}>
                {item.label}
            </Link>
        })
}
    </div>
  )
}

export default NavBarLinks
