"use client"
import React from 'react'
import ImageWithDev from '../ui/imagewithdev'
import { TypographyH2 } from '../typography/h2'
import { TypographyLead } from '../typography/lead'
import { TypographyP } from '../typography/p'
import { Button } from '../ui/button'
import Link from 'next/link'
import Links from '../ui/Links'



const Hero = () => {
  return (
    <section id="#hero" className='min-h-screen md:h-screen  md:overflow-hidden  mt-20 '>
        <div className='p-4  md:p-0 md:flex md:items-center md:w-[70%] md:h-[60vh] mx-auto'>
            <article className='flex flex-col  gap-5'>
                <TypographyH2 className='text-4xl '>
                    Kente Mall
                </TypographyH2>
                <TypographyP className='text-2xl '>
                    Your home of quality kente products.
                    We have everything you ever need form a kente piece . 
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
                    textClass='text-xl  '

                    />
                    <Links
                    href='/about'
                    text='About Us'
                    className='w-full mr-2'
                    textClass='text-xl '
                    />
                </div>
                
            </article>
            <ImageWithDev
            imageurl='/public/asset/hero.png'
            className='mt-10'
            imagewidth={400}
            imageheight={400}                
            />
        </div>
    </section>
  )
}

export default Hero
