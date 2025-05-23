"use client"
import React, { useEffect, useState } from 'react'
import { navlinks } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface compprops {
    className?:string
}

const NavBarLinks = (props:compprops) => {
    const [user, SetUser] = useState<any>()

    const pathName = usePathname()
    const usernavlinks = navlinks.filter(item => item.label.toLowerCase() !== "")

    if(user?.role === "admin") {
      return (
        <div className='hidden md:flex gap-4 items-center uppercase text-extraSmall'>
            {
              
        navlinks.map(item=>{
          return <Link  
          className={` font-bold font-poppins hover:text-yellow-500 ${pathName === item.href ? "text-yellow-500   duration-500  ease-out text-extraSmall": "text-black"}`}
          key={item.label} 
          href={item.href}>
              {item.label}
          </Link>})
     
            }
        </div>
      )
    }
    return (
    <div className={cn('',props.className)}>{
        usernavlinks.map(item=>{
          return <Link  
          key={item.label} 
          className={` font-bold font-poppins text-extraSmall hover:text-yellow-500 ${pathName === item.href ? "text-yellow-500   duration-500  ease-out": "text-black"}`}
          href={item.href}>
              {item.label}
          </Link>
      })
}
    </div>
  )
}

export default NavBarLinks
