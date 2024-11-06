"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import SearchBtn from './searchbtn'

interface heroproductprops {
    className: string
}

const HeroProduct = (props:heroproductprops) => {
  return (
    <section 
    id="heroproduct" 
    className={cn('flex justify-center w-full bg-black h-[50vh] p-8',props.className)}
    >
     <SearchBtn className=""/>
    </section>
  )
}

export default HeroProduct
