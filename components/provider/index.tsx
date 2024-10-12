"use client"
import React from 'react'
import NavBar from '../ui/navbar'

interface providerprops {
    children : React.ReactNode,
}


const Provider = (props: providerprops) => {


  return (
    <div className=''> 
      <NavBar/>
      {props.children}
    </div>
  )
}

export default Provider
