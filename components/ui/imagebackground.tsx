"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { TypographyH2 } from '../typography/h2'
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
    <div className={cn('relative z-10 h-[85vh] md:h-screen overflow-hidden w-full  ',props.className)}>
      <Image
      className='w-full  h-[85vh] md:h-screen object-cover '
      src={HeroImage}
      alt={props.heading}
      width={800}
      height={800}
      />
      <div className='absolute  z-10 text-white bg-black/50 inset-0 pt-20'>

      <div className='absolute max-w-md bottom-40 flex flex-col z-20 gap-5 p-4'>
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
        <Button
        onClick={redirectToProducts} 
        className='w-full z-20 p-4 cursor-pointer  uppercase'>Order now</Button>
      </div>
    </div>
    </div>
  )
}

export default ImageWithBackGround
