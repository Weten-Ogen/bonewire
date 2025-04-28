"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface chaticonprops {
    className?:string
}

const ChatIcon = (props:chaticonprops) => {
  return (
    <Link className={cn('',props.className)} href="">
        <Image
            className=''
            src=""
            alt=""
            width={500}
            height={500}
        />
    </Link>
  )
}

export default ChatIcon