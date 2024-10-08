'use client'
import React from 'react'
import { Avatar } from './avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import avatarImage  from '@/public/asset/profile.png'
import { cn } from '@/lib/utils'

interface avatarIconprops{
    className?: string,
    imageurl?  : string,

}

const AvatarIcon = (props:avatarIconprops) => {
  return (
    
    <Avatar className={cn('bg-red-600 h-10 w-10 overflow-hidden rounded-full ',props.className)}>
        <AvatarImage 
         src={"/public/asset/profile.png"}
         alt="avatar image"
         className='object-cover w-full'
        />
    </Avatar>
  )
}

export default AvatarIcon
