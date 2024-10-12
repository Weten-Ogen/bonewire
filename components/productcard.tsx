"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card'
import Image, { StaticImageData } from 'next/image'
import { Button } from './ui/button'
import { TypographyMuted } from './typography/muted'
import Link from 'next/link'

interface productcardprops{
className?: string,
id:string,   
label:string,
imageUrl:string | StaticImageData,
price: number ,
description:string
}

const ProductCard = (props:productcardprops) => {
  return (
    <Link href={`products/${props.id}`} 
    className={cn('mt-5 cursor-pointer p-4',props.className)}>
      <Card>
        <CardContent className='flex flex-col gap-4 items-center p-0'>
            <div className="w-full h-[200px] overflow-hidden bg-red-500">
                <Image 
                className='object-cover h-auto w-full'
                src={props.imageUrl}
                width={500}
                height={500}
                alt={`${props.label} image`}
                />
            </div>
            <div>
            <CardTitle className=''>
                {props.label}
            </CardTitle>
            <CardDescription className='line-clamp-3'>
                {props.description}
            </CardDescription>
            <div className='flex mt-2 p-2 items-center justify-between'>
            <TypographyMuted className=''>
                {props.price.toString()}
            </TypographyMuted>
            </div>
            </div>
            <CardFooter className='w-full '>
                <Button className='w-full '>add to cart</Button>
            </CardFooter>
        </CardContent>
        
      </Card>
    </Link>
  )
}

export default ProductCard
