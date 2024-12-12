"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import SearchBtn from './searchbtn'

interface heroproductprops {
    className: string
}

const HeroProduct = (props:heroproductprops) => {
  return (
    <div 
    id="heroproduct" 
    className={cn('flex relative justify-center w-full bg-black h-[70vh] p-8',props.className)}
    >
      
     <SearchBtn className=""/>
   
   
    </div>
    </div>
  )
}

export default HeroProduct
