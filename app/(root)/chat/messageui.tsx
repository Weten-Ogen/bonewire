"use client"

import { useUserDetailsStore } from '@/store/userdetail'
import React from 'react'
interface msgprops {
  message: string,

}


const Message =(props : msgprops) => {   
    const avatar= "u"
    
  return (
    <div className={` flex gap-2  
    bg-transparent rounded-lg `}>
      <p className='rounded-full font-bold font-poppins text-extraSmall uppercase bg-gray-200 p-2 '>{avatar}</p>
      <p className='font-bold font-poppins text-extraSmall text-left bg-gray-200  p-2 rounded-lg'>{props.message}</p>
    </div>
  )
}

export default Message