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
  
  return (<Avatar className={cn('border h-10 w-10 overflow-hidden rounded-full uppercase',props.className)}>
        <AvatarFallback className=''>
          {userinfo?.email.charAt(0)}
        </AvatarFallback>
    </Avatar>
  )
}

export default AvatarIcon
