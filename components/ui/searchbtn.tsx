"use client"
import React from 'react'
import { Input } from './input'
import { Button } from './button'


const SearchBtn = () => {
  return (
    <>
    // <div>
    // <TypographyBlockquote className='text-xl py-4'>
    //     Buy all your product here,
    //     Feel free to add to Cart here.
    //     All products are made just for.
    // </TypographyBlockquote>
    <div className='flex items-center  gap-2 m-2'>
      <Input 
       placeholder='search for all products here ...'      
       />
      <Button  className='w-40'>Search</Button>
    </div>
    </div>
       </>
  )
}

export default SearchBtn
