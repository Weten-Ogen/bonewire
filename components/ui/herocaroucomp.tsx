"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { CarouselItem } from './carousel'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import Image from 'next/image'

interface comprops {
    className?:string,
    name:string,
    imageUrl: string,
    comment: string
}

const HeroCarouComp = (props:comprops) => {
  return (
    <CarouselItem className={cn("pl-1 md:basis-1/2 md:basic-1/3  border  shadow-xl shadow-yellow-500  w-full ",props.className)}>
      <div className="p-1 ">
              <Card className="">
                <CardContent className="flex flex-col aspect-square relative items-center gap-5 w-full">
                  <div>

                  <div className='w-full h-full overflow-hidden rounded-lg absolute inset-0 '>
                    <Image 
                    className='w-full h-full rounded-lg object-cover '
                    width={500}
                    height={500}
                    src={props.imageUrl}
                    alt={`${props.name} image`}
                    />
                  </div>
                  <div className='absolute bg-black/65 p-8 md:p-16 w-full h-full flex flex-col items-center gap-10 inset-0 text-white'>
                  <CardTitle className='uppercase text-white text-2xl'>{props.name}</CardTitle>

                  <CardDescription className='text-gray-400
                  text-center text-lg'>{props.comment}</CardDescription>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </div>
    </CarouselItem>
  )
}

export default HeroCarouComp
