"use client"
import React from 'react'
import { Avatar,AvatarFallback } from './avatar'
import { cn } from '@/lib/utils'
import { getUserInfo } from '@/app/actions/authservice'


interface avatarIconprops{
    className?: string,
}

const AvatarIcon = (props:avatarIconprops) => {
  const userinfo = getUserInfo()

  return (
  <Avatar 
    className={ cn('border h-8 w-8 overflow-hidden rounded-full uppercase bg-yellow-500',props.className)}>
        <AvatarFallback className='bg-yellow-500 font-bold p-1'>
          {userinfo?.email.charAt(0)}
        </AvatarFallback>
    </Avatar>

  )
}

export default AvatarIcon
