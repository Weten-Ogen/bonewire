"use client"
import React from 'react'
import { navlinks } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getUserInfo } from '@/app/actions/authservice'

interface compprops {
    className?:string
}

const NavBarLinks = (props:compprops) => {
    const pathName = usePathname()
    const userInfo = getUserInfo();
    const usernavlinks = navlinks.filter(item => item.label.toLowerCase() !== "admin");

    return (
    <div className={cn('',props.className)}>
      {userInfo?.role === "admin" ?
        navlinks.map(item=>{
            return <Link  
            className={` font-bold hover:text-yellow-500 ${pathName === item.href ? "text-yellow-500   duration-500  ease-out": "text-black"}`}
            key={item.label} 
            href={item.href}>
                {item.label}
            </Link>
        }):
        usernavlinks.map(item=>{
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
