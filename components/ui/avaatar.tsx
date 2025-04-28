"use client"
import React, { useEffect,useReducer,useState} from 'react'
import { cn } from '@/lib/utils'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Avatar } from './avatar'
import Image from 'next/image'
import { useUserDetailsStore } from '@/store/userdetail'




interface avatarIconprops{
    className?: string
    src?: string 
    alt?: string
}

const AvatarIcon = (props:avatarIconprops) => {
  const {getUserdetails,session} = useUserDetailsStore()

  useEffect(() => {
    getUserdetails()
  },[])
  return (
    <div className={ cn('border h-10 w-10 overflow-hidden rounded-full uppercase  bg-yellow-400 flex items-center justify-center ',props.className)}>
      <Image
        src={session?.user?.image as string}
        alt={session?.user?.image as string}
        width={50}
        height={50}
        className='h-10 w-10 rounded-full'
      />
      
    </div>

  )
}

export default AvatarIcon
