"use client"
import { cn } from '@/lib/utils'
import { logoprops } from '@/types/next'
import Image from 'next/image'
import React from 'react'
import { TypographyLarge } from '../typography/large'

const Logo = ({
    className,
    imageurl,
    label,
    imageClass,
    imageContainerClass,
    labelClass,
}:logoprops) => {

  return (
    <div className={cn('',className)}>
      {
      imageurl && <div>
        <Image 
        src={imageurl}
        alt="logo icon"
        width={100}
        height={200}
        className={cn('',imageClass
        )}
        />
      </div>
      
      }
      {
        label && <TypographyLarge
        content={label} 
        className={cn('',labelClass)}/>
      }

    </div>
  )
}

export default Logo
