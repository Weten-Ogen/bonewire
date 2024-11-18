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
    <div className={cn('w-full md:flex md:items-center  md:gap-5 p-4',props.className)}>
      <Input 
      className='text-md w-full p-6 my-4 text-white'
       placeholder='search for all products here ...'      
       />
      <Button  className='w-full md:w-[30%] p-6 uppercase'>Search</Button>
    </div>
  
  )
}

export default SearchBtn
