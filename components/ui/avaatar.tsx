"use client"
import React, { useEffect,useState} from 'react'
import { cn } from '@/lib/utils'
import { getUserInfo } from '@/app/actions/authservice'



interface avatarIconprops{
    className?: string,
}

const AvatarIcon = (props:avatarIconprops) => {
  const user = getUserInfo()
  return (
    <div className={ cn('border h-10 w-10 overflow-hidden rounded-full uppercase  bg-yellow-400 flex items-center justify-center ',props.className)}>
       {user && user?.name.slice(0,1)}
  
    </div>

  )
}

export default AvatarIcon
