"use client"
import React, { useEffect,useState} from 'react'
import { cn } from '@/lib/utils'




interface avatarIconprops{
    className?: string,
}

const AvatarIcon = (props:avatarIconprops) => {
 
  return (
    <div className={ cn('border h-10 w-10 overflow-hidden rounded-full uppercase  bg-yellow-400 flex items-center justify-center ',props.className)}>
      
  
    </div>

  )
}

export default AvatarIcon
