"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './button'

interface linksprops {
  className?: string,
  textClass?:string,
  text : string,
  href : string,
  type? : "link"|"default"|"destructive"|"outline"|"secondary"|"ghost"| "secondary" | "ghost" | null,
  

}
const Links = (props:linksprops) => {
  return (
    <Link className={`${cn('',props.className)} 
      ${buttonVariants({variant:`${props?.type || "default"}`})} `
    } 
    href={props.href}>
    
    {props.text}
    </Link>
  )
}

export default Links
