"use client"
import React from 'react'
import NavBar from '../ui/navbar';
import Chatbox from '../ui/chatbox';


interface providerprops {
    children : React.ReactNode,
}


const Provider = (props: providerprops) => {
  return (
    <div className='relative w-full'> 
      <NavBar/>
      <div className=''>
        {props.children}
      </div>
      <Chatbox className=""/>
    </div>
  )
}

export default Provider
