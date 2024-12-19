"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { TypographyH4 } from '../typography/h4'
import { TypographyMuted } from '../typography/muted'
import HeroImage from '@/public/images/hero.png'
import { Button } from './button'
import { useRouter } from 'next/navigation'


interface imagewithbgprops {
    heading : string,
    subHeading?:string,
    message?:string,
  
    className?: string
}

const ImageWithBackGround = (props:imagewithbgprops) => {
  const router = useRouter();
  
  const redirectToProducts = () => {
    router.push("/products")
    router.refresh()
  }

  return (
    <div className={cn('relative object-contain  h-[80vh]  overflow-hidden w-full ',props.className)}>
   
      <Image
      className='w-full  inset-0 h-screen -z-10 object-cover '
      src={HeroImage}
      alt={props.heading}
      width={1000}
      height={1000}
      />

      <div className='absolute  z-10 text-white  inset-0 pt-20 max-w-full md:max-w-lg'>
      <div className='absolute md:max-w-md bottom-40 flex flex-col z-20 gap-5 p-4'>
        <h2 className='text-5xl'>
            {props.heading}
        </h2>
        <div>
        {
          props.subHeading && 
          <TypographyH4 className='text-2xl'>
            {props.subHeading}
           </TypographyH4>
        }
        </div>
        <div>
        {props.message &&
         <TypographyMuted className=''>{props.message}</TypographyMuted>
        }
        </div>
        <Button
        onClick={redirectToProducts} 
   
        className='w-full z-20 p-4 cursor-pointer  uppercase'>Order now</Button>
      </div>
    </div>
    
    </div>
  )
}

export default ImageWithBackGround
