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
     className='hover:-translate-y-0.5 hover:opacity-80 duration-500 max-w-sm  '
     href={`products/${props.id}`} >
    <div className={cn(' rounded-t-lg shadow-lg',props.className)}>
      <Card className="rounded-t-lg">
        <CardContent className='flex flex-col gap-4 items-start rounded-t-lg p-0'>
            <div className="w-full max-h-[20vh]  md:h-[180px] overflow-hidden  rounded-t-lg">
                <Image 
                className='object-cover rounded-t-lg  max-w-full max-h-[20vh] h-auto'
                src={props.imageUrl}
                width={500}
                height={500}
                alt={`${props.label} image`}
                />
            </div>
            <div className='flex text-yellow-500 items-center  '>
            <TypographyMuted className='font-bold font-sans text-slate-900 text-lg p-2'>GHC {props.price}</TypographyMuted>
            </div>
        </CardContent>
      </Card>
  </div>
  </Link>
  )}

export default ProductCard
