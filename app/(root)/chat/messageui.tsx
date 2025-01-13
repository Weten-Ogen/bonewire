"use client"

import React from 'react'

interface messageprops {
    message:string
}

const Message = (props:messageprops) => {
  return (
    <div className='w-full h-[40px] flex item-center rounded-lg rounded-tl-none  px-6 '>
        {props.message}
    </div>
  )
}

export default Message