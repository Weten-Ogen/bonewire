"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './card'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import { Button } from './button'


interface cartitemcardprops {
    className?: string,
    id:string,   
    label:string,
    imageUrl:string | StaticImageData,
    price: number ,
    description:string

}


const CartItemCard = (props:cartitemcardprops) => {
  return (
    <div className={cn("w-full  shadow-black shadow-sm ",props.className)} >
      <Card className='w-full'>
        <CardContent className='p-2'>
         <div className='flex items-start gap-5'>
          <div className='w-[80px]  md:w-[100px] h-[120px] bg-black overflow-hidden rounded-lg'>
            <Image 
            className='object-cover w-full h-full rounded-lg'
            src={props.imageUrl}
            alt=""
            width={500}
            height={500}
            />
          </div>
          <div className='w-full flex flex-col items-center gap-4'>
          <div className='flex  items-center  gap-8'>
            <CardTitle className='uppercase text-lg  '>
              {props.label}
            </CardTitle>
          <CardDescription className=''>
              $ {props.price}
          </CardDescription>
         </div>
          <div className='w-full flex items-center justify-between gap-2'>
            <Button 
            className='w-full font-bold uppercase'>
              pay
            </Button>
            <Button variant="destructive" 
            className='w-full uppercase font-bold'>
              delete
            </Button>
          </div>
        </div>
        </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CartItemCard
