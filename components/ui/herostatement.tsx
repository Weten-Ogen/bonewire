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
        className={cn('h-[90vh] max-w-full   overflow-hidden relative ',props.className)}
    >
      <div 
          className='max-w-4xl md:mx-auto p-4 mt-10 md:p-8 w-full h-[120vh] overflow-hidden   rounded-lg    z-20  object-contain py-8'
      >
        <video 
          width='1000' 
          className='w-full object-cover  h-[70vh] rounded-lg shadow-xl  '
          height="auto"  
          muted 
          autoPlay
          loop 
          >
          <source 
              src="https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/hero-cz5Q8VVWebkyiN3FgvDiunqjYFhR3o.mp4" 
              type="video/mp4"
              />
        </video>
      
      </div>
     
     
    </div>
  )
}

export default HeroStatement
