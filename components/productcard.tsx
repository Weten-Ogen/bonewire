"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card'
import Image, { StaticImageData } from 'next/image'
import { Button } from './ui/button'
import { TypographyMuted } from './typography/muted'
import Link from 'next/link'
import { TypographyH3 } from './typography/h3'
import { TypographyP } from './typography/p'
import { TypographyH4 } from './typography/h4'

interface productcardprops{
className?: string,
id:string,   
label:string,
imageUrl:string | StaticImageData,
price: number ,
description:string
}

const ProductCard = (props:productcardprops) => {
  const calprice  = Math.ceil(props.price / 16.50)  + 50

  return (
    <div className={cn(' rounded-t-lg shadow-lg',props.className)}>
      <Card className="rounded-t-lg">
        <CardContent className='flex flex-col gap-4 items-center rounded-t-lg p-0'>
            <div className="w-full h-[200px] overflow-hidden  rounded-t-lg">
                <Image 
                className='object-cover rounded-t-lg  w-full'
                src={props.imageUrl}
                width={500}
                height={500}
                alt={`${props.label} image`}
                />
            </div>
            <div className="flex flex-col  gap-3 tracking-wide">
            <div className='flex items-center gap-4 flex-wrap justify-between  p-2 '>
          <Link href={`products/${props.id}`} 
          className="">
            <CardTitle className='text-yellow-500 cursor-pointer font-bold underline uppercase '>
                {props.label}
            </CardTitle>
         </Link>
            <div className='flex items-center gap-2'>
            <TypographyH4 className="text-lg">$ {calprice}</TypographyH4>
            <TypographyMuted className=''>(GHC {props.price})</TypographyMuted>
            </div>
            </div>
            <CardDescription className='line-clamp-3 leading-normal px-1 text-center'>
                {props.description}
            </CardDescription>
            </div>
            <CardFooter className='w-full p-2'>
                <Button className='w-full duration-300 p-4 ease-out hover:-translate-y-0.5'>add to cart</Button>
            </CardFooter>
        </CardContent>
        
      </Card>
  </div>
  )
}

export default ProductCard
