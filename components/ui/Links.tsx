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
}
const Links = (props:linksprops) => {
  return (
    <Link 
    className={`${cn('',props.className)} ${buttonVariants({variant:'default'})} `} 
    href={props.href}>
    <p className={cn('',props.textClass)}> 
    {props.text}
    </p>
    </Link>
  )
}

export default Links
