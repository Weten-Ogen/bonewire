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
    <div className={cn("w-full  md:w-[80%] md:mx-auto shadow-lg ",props.className)} >
      <Card className='w-full'>
        <CardContent className=' grid grid-cols-1 col-span-full  gap-4 md:flex md:items-center  md:gap-2 justify-between'>
         <div className='flex justify-between md:justify-start  gap-2 p-2 w-full m-2'>
          <div className='w-[80px]  md:w-[100px] h-[120px] bg-black overflow-hidden rounded-lg'>
            <Image 
            className='object-cover w-full h-full rounded-lg'
            src={props.imageUrl}
            alt=""
            width={500}
            height={500}
            />
          </div>
          <div className='flex flex-col items-start gap-3 p-2'>
            <CardTitle className='uppercase text-lg  '>
              {props.label}
            </CardTitle>
          <CardDescription>
              {props.price}
          </CardDescription>
          </div >
         </div>
          <div className='grid grid-cols-1 md:flex md: items-center  md:flex-col gap-4 w-full'>
            <Button variant="outline" 
            className='w-full'>
              Remove
            </Button>
            <Button 
            className='w-full '>
              Pay
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CartItemCard
