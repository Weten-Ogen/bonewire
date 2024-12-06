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
    <Link
     className='hover:-translate-y-0.5 opacity-80 hover:opacity-100 duration-500 '
     href={`products/${props.id}`} >
    <div className={cn(' rounded-t-lg shadow-lg',props.className)}>
      <Card className="rounded-t-lg">
        <CardContent className='flex flex-col gap-4 items-start rounded-t-lg p-0'>
            <div className="w-full h-[200px] overflow-hidden  rounded-t-lg">
                <Image 
                className='object-cover rounded-t-lg  w-full'
                src={props.imageUrl}
                width={500}
                height={500}
                alt={`${props.label} image`}
                />
            </div>
            <div className='flex text-yellow-500 items-center gap-2 p-2'>
            <TypographyH4 className="text-lg">$ {calprice}</TypographyH4>
            <TypographyMuted className=''>(GHC {props.price})</TypographyMuted>
            </div>
        </CardContent>
        
      </Card>
  </div>
  </Link>
  )}

export default ProductCard
