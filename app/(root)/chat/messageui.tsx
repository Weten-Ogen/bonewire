"use client"

import { useUserDetailsStore } from '@/store/userdetail'
import React from 'react'

interface messageprops {
    message:string,
    
}

const Message = (props:messageprops) => {   
    const avatar= "u"
  return (
    <div className={` flex gap-2  
    bg-transparent rounded-lg `}>
      <p className='rounded-full font-extrabold font-sans uppercase bg-gray-200 p-2 '>{avatar}</p>
      <p className='font-bold font-serif text-sm text-left bg-gray-200  p-2 rounded-lg'>{props.message}</p>
    </div>
  )
}

export default Message