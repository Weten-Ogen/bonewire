"use client"
import { cn } from '@/lib/utils'
import { providersprops } from '@/types/next'
import React from 'react'
import NavBar from '../ui/navbar'

const Providers = ({children,className}:providersprops) => {
  return (
    <main className={cn('',className)}>
      <NavBar 
      className='p-2 md:px-8 '
      />
      <div className='pt-16 '>
        {children}
      </div>
    </main>
  )
}

export default Providers
