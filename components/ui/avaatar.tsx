import { avatarprops } from '@/types/next'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { cn } from '@/lib/utils'

const AvaTar = ({avatarimageclass,className,imageurl,username}:avatarprops) => {
 
  return (
    <Avatar className={cn('bg-yellow-500 rounded-full h-10 w-10 overflow-hidden',className)}>
      {
        imageurl && <AvatarImage 
        src={imageurl}
        className={cn('rounded-full h-10 w-10 uppercase bg-primary font-bold shadow-lg',avatarimageclass)}
        /> 

    }
    {
      imageurl || <AvatarFallback 
      className='rounded-full h-10 w-10 uppercase bg-primary font-bold shadow-lg' >
          {username?.slice(0,1)}
      </AvatarFallback>
    }
    </Avatar>
  )
}

export default AvaTar
