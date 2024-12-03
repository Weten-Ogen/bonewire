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
      
    </div>
  )
}

export default Filters
