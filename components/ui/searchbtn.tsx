"use client"
import React from 'react'
import { Input } from './input'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface searchprops{
  className: string
}

const SearchBtn = (props:searchprops) => {
  return (
    
    <div className={cn('md: flex items-center   gap-4 w-[90%] mx-auto',props.className)}>
      <Input 
      className='text-md w-full p-2'
       placeholder='search for all products here ...'      
       />
      <Button  className='w-full md:w-40'>Search</Button>
    </div>
  
  )
}

export default SearchBtn
