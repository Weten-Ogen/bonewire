"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Image from 'next/image'

import AutoPlay from  'embla-carousel-autoplay'
import CarouselShowCard from './carouselshowcard'

interface carouselComp {
    className?:string,
    data:any[],
    type:string
}
const CarouselComp = (props:carouselComp) => {
     const plugin = React.useRef(AutoPlay({ delay: 2000, stopOnInteraction: true }))

  return (
    <div className='md:w-[80%] md:mx-auto p-4'>
        <Carousel
            className="ease-in-out w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
            align: 'start',
            }}
        >
            <CarouselContent className="w-full md:mx-auto p-0">
                {
                    props.data.map((item:any,i:number) => {
                    return(
                        <CarouselItem key={i}>
                            <CarouselShowCard
                                item={item}
                                type={props.type}
                            />   
                        </CarouselItem>
                    )
                    })
                }
            </CarouselContent>
        
        </Carousel>
    </div>
  )
}

export default CarouselComp