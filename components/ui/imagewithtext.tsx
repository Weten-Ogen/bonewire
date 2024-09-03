"use client"
import { cn } from '@/lib/utils'
import { imagewithtextprops } from '@/types/next'
import Image from 'next/image'
import React from 'react'
import { TypographyH3 } from '../typography/typoh3'
import { TypographyH2 } from '../typography/typoh2'
import { TypographyMuted } from '../typography/muted'
import { TypographyLead } from '../typography/lead'
import { TypographyH4 } from '../typography/typoh4'
import NavLinks from './navlinks'
import icons from '@/constants/icons'
import Link from 'next/link'
import { TypographyBlockquote } from '../typography/blockQuote'
import { buttonVariants } from './button'

const ImageWithText = ({imageurl,actionref,calltoaction,className,content,subcontent,title
}:imagewithtextprops) => {
  return (
    <div className={cn('',className)}>
      <div className='flex flex-col gap-2 md:gap-4  md:max-w-lg'>
        <TypographyH2 
        content={title}
        />
        <TypographyH4 
        content={content}
        className={title ? "block": "hidden"}
        />
        <TypographyMuted 
        content={subcontent}
        />
        {calltoaction && 
         <Link className={`flex items-center gap-4 ${buttonVariants({variant:"default"})}`} href={actionref}>
            <TypographyBlockquote 
             content={calltoaction}
            />
            <Image
            src={icons.arrowright}
            alt={'cattoaction icon'}
            width={15}
            height={15}
            className=''
            />
            </Link>
        }
        
      </div>
      <Image 
       src={imageurl}
       alt={`${imageurl} image`}
       width={500}
       height={500}
       className="pt-5 md:pt-0 aspect-square"
      />
    </div>
  )
}

export default ImageWithText
