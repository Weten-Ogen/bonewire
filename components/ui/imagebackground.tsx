"use  client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { TypographyH2 } from '../typography/h2'
import { TypographyH4 } from '../typography/h4'
import { TypographyMuted } from '../typography/muted'
import HeroImage from '@/public/images/hero.png'
import { Button } from './button'

interface imagewithbgprops {
    heading : string,
    subHeading?:string,
    message?:string,
  
    className?: string
}

const ImageWithBackGround = (props:imagewithbgprops) => {
  return (
    <div className={cn('relative -z-10 h-screen w-full  object-contain',props.className)}>
      <Image
      className='w-full h-screen object-cover '
      src={HeroImage}
      alt={props.heading}
      width={800}
      height={800}
      />
      <div className='absolute  z-10 text-white bg-black/50 inset-0 mt-20'>

      <div className='absolute max-w-md bottom-40 flex flex-col  gap-5 p-4'>
        <h2 className='text-5xl'>
            {props.heading}
        </h2>
        {
            props.subHeading && 
            <TypographyH4 className='text-2xl'>
            {props.subHeading}
        </TypographyH4>
        }
        {props.message &&
         <TypographyMuted className=''>{props.message}</TypographyMuted>
        }
        <Button className='w-full uppercase'>Order now</Button>
      </div>
    </div>
    </div>
  )
}

export default ImageWithBackGround
