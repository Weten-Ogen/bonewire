import { avatarprops } from '@/types/next'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { cn } from '@/lib/utils'

const AvaTar = ({avatarimageclass,className,imageurl,username}:avatarprops) => {
    
 if(username) return 
 (
    <Avatar className={cn('',className)}>
        <AvatarFallback className='text-black'>
            {username?.slice(0,1)}
            </AvatarFallback>
    </Avatar>)
  return (
    <Avatar className={cn('bg-yellow-500 rounded-full h-10 w-10 overflow-hidden',className)}>
      {
        imageurl && <AvatarImage 
        src={imageurl}
        className={cn('',avatarimageclass)}
        /> 
    }
    </Avatar>
  )
}

export default AvaTar
