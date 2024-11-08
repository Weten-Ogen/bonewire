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
                <CardContent className="flex flex-col aspect-square items-center gap-5 w-full">
                  <div>

                  <CardTitle className='uppercase '>{props.name}</CardTitle>
                  <div className='w-full h-[60vh] overflow-hidden rounded-lg bg-inherit'>
                    <Image 
                    className='w-full h-[50vh] rounded-lg object-cover '
                    width={500}
                    height={500}
                    src={props.imageUrl}
                    alt={`${props.name} image`}
                    />
                  </div>
                  <CardDescription>{props.comment}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            </div>
    </CarouselItem>
  )
}

export default HeroCarouComp
