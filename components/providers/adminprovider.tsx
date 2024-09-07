"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import AdminSideBar from '../ui/adminsidebar'

interface  adminprops {
    children : React.ReactNode,
    className:string
}

const Adminprovider = ({children,className}:adminprops) => {
  return (
    <section className={cn("flex gap-8 ",className)}>
      <AdminSideBar
      className='hidden md:block'
      />
      <div className='w-full ml-0 lg:ml-[300px] p-8' >
      {children}

      </div>

    </section>
  )
}

export default Adminprovider
