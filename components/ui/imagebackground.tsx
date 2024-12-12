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

      <div className='absolute  z-10 text-white  inset-0 pt-20'>
      <div className='absolute max-w-md bottom-40 flex flex-col z-20 gap-5 p-4'>
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
    <div className='custom-shape-divider-bottom-1734018507' >
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
    </div>
    </div>
  )
}

export default ImageWithBackGround
