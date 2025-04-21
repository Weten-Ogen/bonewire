'use client'
import { cn } from '@/lib/utils'
import React from 'react'

interface textonvideoprops {
    className?:string,
    text:string,
    videoUrl:string,
    textClass?:string,
    videoClass?:string,
}

const TextOnVideo = (props:textonvideoprops) => {
  return (
    <div className={cn('w-full relative  h-screen overflow-hidden',props.className)}>
        <div className={cn('absolute bg-secondaryColor inset-0 text-primaryColor font-poppins z-10 max-w-300 w-300 h-300',props.textClass)}>
            {props.text}
        </div>
        <video
            width={1000}
            muted
            autoPlay
            autoFocus
            loop
            controls
        className={cn('w-full h-screen -z-10',props.videoClass)}>
            <source
                src={props.videoUrl}
                type="video/mp4"
            />
            
        </video>
    </div>
  )
}

export default TextOnVideo