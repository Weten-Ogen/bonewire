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
    <div className=''>
        {
            props.type == 'pic' ?

        <Card className=''>
            <CardContent className=''>
                <Image
                    
                    src={props.item.imageurl}
                    alt={props.item.imageurl}
                    width={500}
                    height={500}
                    className='object-contain'
                />
            </CardContent>
        </Card>
        : 
        <Card>
            <CardContent>
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