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
    <div className='w-[300px] h-[300px] object-contain'>
        {
            props.type == 'pic' ?

        <Card className='p-0'>
            <CardContent className='p-0'>
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
        <Card className='p-0'>
            <CardContent className='p-0'>
                <video 
                                width='1000' 
                                className='w-full object-cover  h-[70vh] rounded-lg shadow-xl'
                                height="auto"  
                                muted 
                                autoPlay
                                loop 
                            >
                        <source 
                            src={props.item} 
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