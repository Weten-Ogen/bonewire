"use client"
import React from 'react'
import NavBar from '../ui/navbar';



interface providerprops {
    children : React.ReactNode,
}


const Provider = (props: providerprops) => {
  return (
    <div className='relative'> 
      <NavBar/>
      <div className=''>
        {props.children}
      </div>
     
    </div>
  )
}

export default Provider
