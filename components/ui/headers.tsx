"use client"
import { headersprops } from '@/types/next'
import React from 'react'
import { TypographyH2 } from '../typography/typoh2'
import { cn } from '@/lib/utils'
import { TypographyP } from '../typography/typoP'
import { TypographyH4 } from '../typography/typoh4'

const Headers = ({className,content,contentClass,subcontent,subcontentClass}:headersprops) => {
  return (
    <div className={cn('',className)}>
      <TypographyH2  
      content={content} 
      className={cn('',contentClass)}
      />
      <TypographyH4
      content={subcontent}
      className={cn('',subcontentClass)} 
      />
    </div>
  )
}

export default Headers
