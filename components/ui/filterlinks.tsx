"use client"
import { filterlinksprops } from '@/types/next'
import React from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils'


const FilterLinks = ({filters,className}:filterlinksprops) => {
  return (
    <div className={cn('',className)}>
      {filters && filters.map(item => {
        return (
            <Button 
            className='text-sm text-yellow-700 font-bold md:text-sm uppercase touchbtn' variant={'link'}
            >
                {item.label}
            </Button>
        )
      })}
    </div>
  )
}

export default FilterLinks
