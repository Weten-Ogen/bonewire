"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { TypographyBlockquote } from '../typography/block'





interface heroprops {
    className: string
}
const HeroStatement = (props:heroprops) => {
  return (
    <div 
    className={cn('md:h-screen max-w-full   relative ',props.className)}>
      <div className='max-w-full w-full  h-screen rounded-lg   z-20  object-contain py-8 '>
        <video width='800' 
        className='w-full object-cover md:max-h-screen h-auto  '
         height="auto"  
        muted 
        autoPlay
        loop >
          <source 
          src="https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/hero-cz5Q8VVWebkyiN3FgvDiunqjYFhR3o.mp4" 
          type="video/mp4"/>
        </video>
      </div>
     
     
    </div>
  )
}

export default HeroStatement
