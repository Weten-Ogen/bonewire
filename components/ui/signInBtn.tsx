"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import { buttonVariants } from './button'

interface signinbtnprops{
    className?: string,
    text: string
}

const SignInBtn = (props: signinbtnprops) => {
  return (
    <Link
    href="/signin" 
    className={cn(`capitalize ${
 buttonVariants({variant:"outline"})}`,props.className)}>
      {props.text}
    </Link>
  )
}

export default SignInBtn
