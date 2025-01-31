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
    className={cn('md:flex space-y-8 md:space-y-0 w-full items-center justify-between my-5 p-4   md:h-[40vh]  gap-8 md:gap-10 ',props.className)}>
      <div className='pt-0 md:pt-10 p-6  border  md:p-4 rounded-lg shadow-xl flex flex-col relative  items-start max-w-sm md:max-w-lg'>
       <div className='flex items-center gap-2  '>
        <Truck 
        className="bg-yellow-300 rounded-lg p-2 " 
        size={56}
        />
            <TypographyH4 
            className='text-poppins  text-primaryFont font-bold uppercase font-serif '>Global Delivery</TypographyH4>
       </div>
            <TypographyP className='font-poppins p-4 max-w-sm md:max-w-lg text-extraSmall font-semibold '>We deliver to over 200+ countries in the world.We aid you finding a delivery agent here, that matches yor budget .We are online anytime, everytime to serve you with the best of quality. 24/7.
             call or reach out to us to get your piece. 
            </TypographyP>
      
      </div >
      <div className='pt-0 md:pt-10 p-6  border  md:p-4 rounded-lg shadow-xl flex flex-col relative  items-start max-w-sm md:max-w-lg'>
        <div className='flex items-center  gap-2 '>

        <Server 
        className="bg-yellow-300 rounded-lg p-2  "
         size={56}/>
        
            <TypographyH4 className='text-primaryFont text-poppins font-bold font-serif uppercase'> Online Services </TypographyH4>
        </div>
            <TypographyP className=" p-4 max-w-sm font-semibold font-poppins text-extraSmall md:max-w-lg ">
                We always here to aid you in your search for authentic cultural experience online.We think culture is for the royalties of which you are a part. We here to  serve you.
                You are a few clicks away from becoming a royalty .
            </TypographyP>
      </div>
      <div className='pt-0 md:pt-10  border relative  p-6 md:p-4 rounded-lg shadow-xl flex flex-col max-w-sm md:max-w-lg  items-start'>
        <div className='flex items-center gap-2'>
        <HeartHandshake className="bg-yellow-300 rounded-lg p-2 " size={56}/>
    
            <TypographyH4 className='text-primaryFont font-poppins font-bold  uppercase '>
                More Services
            </TypographyH4>
        </div>
            <TypographyP className='font-poppins font-semibold text-extraSmall max-w-sm md:max-w-lg p-4'> 
                Feel free to task us with your product process. 
                Some customers prefer outfit made out of kente. 
                We can find you the best of designers to get it done for you.We deliver on our promise of quality.Products  off of quality.
            </TypographyP>
          
      </div>
    </section>
  )
}

export default HeroInfo
