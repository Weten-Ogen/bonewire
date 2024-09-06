"use client"
import { cn } from '@/lib/utils'
import { navlinks } from '@/types/next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypographyP } from '../typography/typoP'
import { UseCartStore } from '@/store/cartstore'

const NavLinks = ({iconsClass,label,labelClass,reff,className,navicon}:navlinks) => {
  const {count} = UseCartStore((state) => ({
    count: state.count
  }))
  return (
    <Link href={reff} className={cn('flex',className)}  >
        
        <div className='relative'>
        {navicon &&
          <Image
          src={navicon}
          alt={`${label} icon`}
          width={18}
          height={18}
          className={cn('',iconsClass)}
          />
        }
          {label === "Cart" && <p className='absolute -top-5 -right-3 m-1 p-1 z-10 text-[10px]'>{count}</p>}
        </div> 
        
        <TypographyP 
        className={cn('',labelClass)}
        content={label}
        />
    </Link>
  )
}

export default NavLinks
