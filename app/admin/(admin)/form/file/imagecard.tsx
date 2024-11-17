"use client"
import Image from 'next/image'
import React from 'react'
import { del } from "@vercel/blob"
import { Button } from '@/components/ui/button'


const ImageCard = (props:any) => {
    
    
    return (
    <>
    <div className=''>
      <Image 
          src={props.downloadUrl}
          width={200}
          height={200}
          alt={props.pathname}
          />
          <p className='text-wrap'>
            {props.downloadUrl}
          </p>

        
    </div>
</>
  )
}

export default ImageCard
