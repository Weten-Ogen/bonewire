"use client"
import React from 'react'
import ImageWithDev from '../ui/imagewithdev'
import { TypographyH2 } from '../typography/h2'
import { TypographyLead } from '../typography/lead'
import { TypographyP } from '../typography/p'
import { Button } from '../ui/button'
import Link from 'next/link'
import Links from '../ui/Links'
import { ChevronRight, Info } from 'lucide-react'
import HeroImg from '@/public/images/hero1.jpg'

const Hero = () => {
    const imagelink = "/public/images/hero.png"
  return (
    <section id="#hero" className='min-h-screen md:h-screen  md:overflow-hidden  mt-20 p-4 '>
        <div className='p-4  md:p-0 md:flex md:items-center md:w-[70%] md:h-[60vh] mx-auto gap-10'>
            <article className='flex flex-col  gap-5'>
                <TypographyH2 className='text-4xl '>
                    Kente Mall
                </TypographyH2>
                <TypographyP className='text-2xl '>
                    Your home of quality kente products.
                    We have everything you ever need form a kente piece. 
                </TypographyP>
                <TypographyLead className='text-lg'>
                    Quality is Assured 
                    and Affordable
                </TypographyLead>
                <div className='flex w-full mt-10 items-center gap-4 mx-auto'>
                    <Links 
                    href={'/products'}
                    text='Order Now'
                    className='w-full'
                    
                    type="default"
                    textClass='text-xl  '

                    />
                    <Links
                    href='/about'
                    text='About Us'
                    
                    className='w-full mr-2'
                    type="default"
                    textClass='text-xl '
                    />
                </div>
                
            </article>
            <ImageWithDev
        
            imageurl={HeroImg || imagelink} 
            className='mt-10 rounded-lg'
            imagewidth={400}
            imageheight={400}                
            />
        </div>
    </section>
  )
}

export default Hero
