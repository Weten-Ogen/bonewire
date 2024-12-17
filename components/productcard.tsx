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
  const convertedprice = parseFloat(props.price.toString()).toFixed(2)

  return (
    <Link
     className='hover:-translate-y-0.5 hover:opacity-80 duration-500  rounded-b-lg max-w-lg  '
     href={`products/${props.id}`} >
    <div className={cn(' rounded-t-lg rounded-b-lg shadow-lg',props.className)}>
      <Card className="rounded-t-lg rounded-b-lg">
        <CardContent className='flex  gap-4 rounded-b-lg  items-start rounded-t-lg p-0'>
            <div className="max-w-full  max-h-[30vh]  md:max-w-full overflow-hidden   rounded-t-lg  md:max-h-60 ">
                <Image 
                className='object-cover rounded-t-lg  max-w-full bg-gray-400 md:max-w-lg w-full max-h-[20vh] md:max-h-[40vh] h-auto'
                src={props.imageUrl}
                width={500}
                height={500}
                alt={`${props.label} image`}
                />
            </div>
            <div className='flex flex-col items-center px-4 py-2 relative min-h-auto'>

              <div className='flex flex-wrap w-full text-yellow-500 items-center  '>
              <TypographyMuted className=' text-sm '>{props.label}</TypographyMuted>
              </div>
              <div className=' w-full text-yellow-500 '>
              <TypographyMuted className='font-bold font-sans text-slate-900 text-2xl '>GHC {convertedprice}</TypographyMuted>
              </div>
              <div className='w-full pt-5 '>
                <Button className='font-bold capitalize tracking-wider w-full'>chat now</Button>
                
              </div>
            </div>
        </CardContent>
      </Card>
  </div>
  </Link>
  )}

export default ProductCard
