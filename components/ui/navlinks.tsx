"use client"
import { cn } from '@/lib/utils'
import { navlinks } from '@/types/next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypographyP } from '../typography/typoP'

const NavLinks = ({iconsClass,label,labelClass,reff,className,navicon}:navlinks) => {
  return (
    <Link href={reff} className={cn('flex',className)}  >
        
        {navicon && 
        <Image
        src={navicon}
        alt={`${label} icon`}
        width={18}
        height={18}
        className={cn('',iconsClass)}
        />}
        
        <TypographyP 
        className={cn('',labelClass)}
        content={label}
        />
    </Link>
  )
}

export default NavLinks
