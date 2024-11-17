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
    <div className={cn('w-full flex items-center gap-3 md:gap-5 px-4',props.className)}>
      <Input 
      className='text-md w-full p-6 my-4 text-white'
       placeholder='search for all products here ...'      
       />
      <Button  className=' md:w-40 p-6 uppercase'>Search</Button>
    </div>
  
  )
}

export default SearchBtn
