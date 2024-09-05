import { searchbtnprops } from '@/types/next'
import React from 'react'
import { Button } from './button'
import { Input } from './input'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import icons from '@/constants/icons'
import { SearchIcon } from 'lucide-react'

const SearchBtn = ({className}:searchbtnprops) => {
  return (
    <div className={cn('relative',className)}>
      <Input 
      
      className='py-6 border border-yellow-500 text-md  hover:ring-black   md:px-4 w-full '
      placeholder='search for any kente product ....'
      type="text"/>
      <SearchIcon 
      size={32}
      className='absolute top-4  right-4 md:right-2 bg-yellow-500 p-2 rounded-full cursor-pointer'/>
      
    </div>
  )
}

export default SearchBtn
