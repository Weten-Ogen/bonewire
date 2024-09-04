"use client"
import { cn } from '@/lib/utils'
import { imagewithtextprops } from '@/types/next'
import Image from 'next/image'
import React from 'react'
import { TypographyH2 } from '../typography/typoh2'
import { TypographyMuted } from '../typography/muted'
import { TypographyH4 } from '../typography/typoh4'
import icons from '@/constants/icons'
import Link from 'next/link'
import { TypographyBlockquote } from '../typography/blockQuote'
import { buttonVariants } from './button'

const ImageWithText = ({imageurl,actionref,calltoaction,className,content,subcontent,title
}:imagewithtextprops) => {
  return (
    <div className={cn('',className)}>
      <div className='flex flex-col gap-2 md:gap-4  md:max-w-lg rounded-xl '>
        <TypographyH2 
        content={title}
        className='font-bold md:text-4xl '
        />
        <TypographyH4 
        content={content}
        className={content ? "block text-xl md:text-2xl": "hidden"}
        />
        <TypographyMuted 
        content={subcontent}
        className='text-md md:text-lg'
        />
        {calltoaction && 
         <Link className={`flex items-center gap-4 bg-primary p-4 rounded-md justify-center `} 
         href={actionref}>
            <TypographyBlockquote 
             content={calltoaction}             className='text-md md:text-lg font-bold'
            />
            <Image
            src={icons.arrowright}
            alt={'cattoaction icon'}
            width={30}
            height={30}
            className=' p-2 bg-yellow-500 text-white rounded-full'

            />
          </Link>
        }
        
      </div>
      <Image 
       src={imageurl}
       alt={`${imageurl} image`}
       width={500}
       height={500}
       className="pt-5 md:pt-0 aspect-square mx-auto shadow-md rounded-xl"
      />
    </div>
  )
}

export default ImageWithText
