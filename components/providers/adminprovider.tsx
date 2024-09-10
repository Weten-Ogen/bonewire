"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import AdminSideBar from '../ui/adminsidebar'
import MobileNav from '../ui/mobilenav'
import MobileSideBarNav from '../ui/mobilesidebar'
import AuthProvider from './authprovider'

interface  adminprops {
    children : React.ReactNode,
    className:string
}

const Adminprovider = ({children,className}:adminprops) => {
  return (
    <section className={cn("flex md:gap-8",className)}>
      
        <AdminSideBar
        className='hidden md:block'
        />

          <div className='w-full ml-0 lg:ml-[300px]'>
        <MobileSideBarNav 

/>
        <div className=' p-8' >
        {children}

        </div>
        </div>
        

    </section>
  )
}

export default Adminprovider
