"use client"
import React from 'react'
import NavBar from '../ui/navbar'

interface providerprops {
    children : React.ReactNode,
}


const Provider = (props: providerprops) => {


  return (
    <main className=''> 
      <NavBar/>
      <div className=''>
        {props.children}
      </div>
    </main>
  )
}

export default Provider
