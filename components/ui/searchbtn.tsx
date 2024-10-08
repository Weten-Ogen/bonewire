"use client"
import React from 'react'
import { Input } from './input'
import { Button } from './button'


const SearchBtn = () => {
  return (
    <>
    <div className='flex items-center  gap-2 m-2'>
      <Input 
       placeholder='search for all products here ...'      
       />
      <Button  className='w-40'>Search</Button>
    </div>
    </>
  )
}

export default SearchBtn
