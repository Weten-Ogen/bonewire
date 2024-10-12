"use client"
import React from 'react'
import { filterlist } from '@/lib/constants'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

interface filterprops {
  className: string
}

const Filters = (props:filterprops) => {
  return (
    <div className={cn('px-2',props.className)}>
      <div className='flex flex-wrap gap-2'>
        {filterlist.map(item => {
          return (
            <Button className='text-sm capitalize' variant="ghost" key={item.label}>
              {item.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default Filters
