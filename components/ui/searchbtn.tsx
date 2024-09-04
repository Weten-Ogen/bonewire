import { searchbtnprops } from '@/types/next'
import React from 'react'
import { Button } from './button'
import { Input } from './input'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import icons from '@/constants/icons'

const SearchBtn = ({className}:searchbtnprops) => {
  return (
    <div className={cn('',className)}>
      <Input 
      className='py-4 border border-yellow-500 text-md  hover:ring-black md:py-6  md:px-4 w-full '
      placeholder='search for any kente product ....'
      type="text"/>
      <Button className='text-lg mt-4 w-full md:w-[25%] md:mt-0 py-8 px-2 md:py-6  md:px-4 touchbtn flex items-center gap-4' type="submit">
        <Image 
         src={icons.search}
         alt={"search icon"}
         width={24}
         height={24}
        />
        <span>Search</span>
        
        </Button>
    </div>
  )
}

export default SearchBtn
