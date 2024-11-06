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
    
    <div className={cn('   md:flex  items-center mt-10  gap-4 w-[90%] mx-auto',props.className)}>
      <Input 
      className='text-md w-full p-8 my-4 text-white'
       placeholder='search for all products here ...'      
       />
      <Button  className='w-full md:w-40 p-8 uppercase'>Search</Button>
    </div>
  
  )
}

export default SearchBtn
