"use client"
import React from 'react'
import { Input } from './input'
import { Button } from './button'


const SearchBtn = () => {
  return (
    <>
    <div className='grid md:grid-cols-2 items-center gap-4 p-2'>
      <Input 
      className='text-md p-2'
       placeholder='search for all products here ...'      
       />
      <Button  className='w-full md:w-40'>Search</Button>
    </div>
    </>
  )
}

export default SearchBtn
