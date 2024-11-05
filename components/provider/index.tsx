"use client"
import React from 'react'
import NavBar from '../ui/navbar'

interface providerprops {
    children : React.ReactNode,
}


const Provider = (props: providerprops) => {


  return (
    <section className=''> 
      <NavBar/>
      <div className=''>
        {props.children}
      </div>
    </section>
  )
}

export default Provider
