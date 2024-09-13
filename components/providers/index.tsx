"use client"
import { cn } from '@/lib/utils'
import { providersprops } from '@/types/next'
import React from 'react'
import NavBar from '../ui/navbar'
import AuthProvider from './authprovider'

const Providers = ({children,className}:providersprops) => {
  return (
    <main className={cn('',className)}>
      
      <div>
        <NavBar 
        className='p-2 md:px-8 '
        />
        <div className='pt-16 '>
            {children}
        </div>
      </div>
    </main>
  )
}

export default Providers
