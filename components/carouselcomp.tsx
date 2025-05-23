"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Image from 'next/image'

import AutoPlay from  'embla-carousel-autoplay'

interface carouselComp {
    className?:string,
    data:any[],
    type:string
}
const CarouselComp = (props:carouselComp) => {
     const plugin = React.useRef(AutoPlay({ delay: 3000, stopOnInteraction: true }))

  return (
    <div>
        <Carousel
            className="ease-in-out w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
            align: 'start',
            }}
        >
            <CarouselContent>
                {
                    props.data.map((item:any,i:number) => {
                    return(
                        props.type ?
                        <CarouselItem className='max-w-full h-auto'>
                            <div>
                                <Image 
                                    src={item.imageurl}
                                    alt={item.imageurl}
                                    width={500}
                                    height={500}
                                    className='w-full object-contain'
                                />
                            </div>
                        </CarouselItem>
                        : 
                        <CarouselItem>
                            <video 
                                width='1000' 
                                className='w-full object-cover  h-[70vh] rounded-lg shadow-xl'
                                height="auto"  
                                muted 
                                autoPlay
                                loop 
                            >
                        <source 
                            src="https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/hero-cz5Q8VVWebkyiN3FgvDiunqjYFhR3o.mp4" 
                            type="video/mp4"
                        />
                        </video>                                        
     
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