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
    className={cn('grid grid-cols-1 md:grid-cols-3 w-[99%]  item-center justify-between min-h-sm mt-5 md:h-[70vh] p-4 gap-8 md:gap-12 ',props.className)}>
      <div className='pt-0  md:pt-10 relative max-w-sm p-6 md:p-4 rounded-lg shadow-xl flex  flex-col items-start'>
       
        <Truck className="bg-yellow-300 rounded-lg p-2 " size={56}/>
        
            <TypographyH4 className='text-2xl font-sans font-bold pt-4'>Global Delivery</TypographyH4>
            <TypographyP className='font-serif'>We deliver to over 200+ countries in the world.
            We aid you finding a delivery agent here, that matches yor budget </TypographyP>
        
        
      </div >
      <div className='pt-0 md:pt-10  border  p-4 rounded-lg shadow-xl flex flex-col relative items-start max-w-sm'>
    
        <Server 
        className="bg-yellow-300 rounded-lg p-2 "
         size={56}/>
        
            <TypographyH4 className='text-2xl  font-sans font-bold pt-4'>24 / 7 Online Service </TypographyH4>
            <TypographyP className="font-serif">
                We always here to aid you in your search for authentic cultural experience online.We think culture is for the royalties of which you are a part. We here to  serve you.
            </TypographyP>
      </div>
      <div className='pt-0 md:pt-10  border relative  p-4 rounded-lg shadow-xl flex flex-col max-w-sm  items-start'>

        <HeartHandshake className="bg-yellow-300 rounded-lg p-2 " size={56}/>
    
            <TypographyH4 className='text-2xl font-bold font-sans pt-4'>
                Other Service
            </TypographyH4>
            <TypographyP className='font-serif'> 
                Feel free to task us with your product process. 
                Some customers prefer outfit made out of kente. 
                We can find you the best of designers to get it done for you.
            </TypographyP>
          
      </div>
    </section>
  )
}

export default HeroInfo
