'use client'
import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

interface carprops {
    item:any,
    type: string
}
const CarouselShowCard = (props:carprops) => {
  return (
    <div className='md:w-[300px] md:h-[300px] object-contain p-4 w-full'>
        {
            props.type == 'pic' ?

        <Card className='w-full p-0'>
            <CardContent className='w-full p-0'>
                <Image
                    
                    src={props.item.imageurl}
                    alt={props.item.imageurl}
                    width={500}
                    height={500}
                    className='w-full object-contain'
                />
            </CardContent>
        </Card>
        : 
        <Card className='w-full p-0'>
            <CardContent className='w-full p-0'>
                <video 
                                width='1000' 
                                className='w-full object-cover  h-[70vh] rounded-lg shadow-xl'
                                height="auto"  
                                muted 
                                autoPlay
                                loop 
                            >
                        <source 
                            src={props.item.videourl} 
                            type="video/mp4"
                        />
                        </video>                                        
            </CardContent>
        </Card>
        }
    </div>
  )
}

export default CarouselShowCard