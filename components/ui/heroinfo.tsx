"use client"
import { cn } from '@/lib/utils'
import { HeartHandshake, Server, Truck } from 'lucide-react'
import React from 'react'
import { TypographyH4 } from '../typography/h4'
import { TypographyP } from '../typography/p'

interface heroinfoprops {
    className?: string
}

const HeroInfo = (props:heroinfoprops) => {
  return (
    <section 
    id="heroinfo" 
    className={cn('grid grid-cols-1 md:grid-cols-3 w-[99%] mx-auto item-center justify-between h-[140vh] mt-5 md:h-[60vh] p-4 gap-8 md:gap-12 ',props.className)}>
      <div className='pt-0 md:pt-10 relative border border-gray-200 p-4 rounded-lg shadow-lg flex flex-col items-start'>
        <div className="w-0.5 h-10 -z-10 top-0 left-8 absolute bg-yellow-300 "/>
        <Truck className="bg-yellow-300 rounded-lg p-2 " size={56}/>
        <div className=''>
            <TypographyH4 className='text-2xl pt-4'>Global Delivery</TypographyH4>
            <TypographyP className=''>We deliver to over 200+ countries in the world.
            We aid you finding a delivery agent here, that matches yor budget </TypographyP>
        </div>
      </div >
      <div className='pt-0 md:pt-10  border border-gray-200 p-4 rounded-lg shadow-lg flex flex-col relative items-start'>
      <div className="w-0.5 h-10 -z-10 top-0 left-8 absolute bg-yellow-300 "/>
        <Server 
        className="bg-yellow-300 rounded-lg p-2 "
         size={56}/>
        
            <TypographyH4 className='text-2xl pt-4'>24 / 7 Online Service </TypographyH4>
            <TypographyP className="">
                We always here to aid you in your search for authentic cultural experience online.We think culture is for the royalties of which you are a part. We here to  serve you.
            </TypographyP>
      </div>
      <div className='pt-0 md:pt-10  border relative border-gray-200 p-4 rounded-lg shadow-lg flex flex-col items-start'>
      <div className="w-0.5 h-10 -z-10 top-0 left-10 absolute bg-yellow-300 "/>
        <HeartHandshake className="bg-yellow-300 rounded-lg p-2 " size={56}/>
    
            <TypographyH4 className='text-2xl pt-4'>
                Other Service
            </TypographyH4>
            <TypographyP className=''> 
                Feel free to task us with your product process. 
                Some customers prefer outfit made out of kente. 
                We can find you the best of designers to get it done for you.
            </TypographyP>
      </div>
    </section>
  )
}

export default HeroInfo
