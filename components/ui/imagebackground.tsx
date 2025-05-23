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
    <div className={cn('relative object-contain h-[90vh]  overflow-hidden max-w-full w-full',props.className)}>
      <div className=''>
        <Image
        className='w-full h-screen object-cover '
        src={HeroImage}
        alt={props.heading}
        width={1000}
        height={1000}
        />
      </div>

      <div className='absolute pt-16 p-4 md:p-8  inset-0 flex flex-col items-center md:items-start md:justify-center  w-full  justify-center text-white bg-black/80 '>
      <div className='flex flex-col  max-w-lg'>
       
        <h2 className='text-mediumFont font-bold font-poppins'>
            {props.heading}
        </h2>

        <div>
        {
            props.subHeading && 
          <TypographyH4 className='text-primaryFont py-5 font-poppins  font-medium'>
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
        
        className='w-full z-20 p-4 cursor-pointer font-poppins text-extraSmall font-bold uppercase '>
          order now
        </Button>
      </div>
        </div>  
    
    
    </div>
  )
}

export default ImageWithBackGround
