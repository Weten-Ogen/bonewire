"use client"
import React from 'react'
import AboutImg from '@/public/images/hero.png'
import Image from 'next/image'
import { TypographyH2 } from '@/components/typography/h2'
import { TypographyBlockquote } from '@/components/typography/block'

const About = () => {
  return (
    <section className="relative min-h-screen md:h-screen overflow-hidden w-full">
      <div className="max-w-full min-h-screen md:h-screen ">
        <Image 
        src={AboutImg}
        alt={'kente mall image'}
        width={800}
        height={800}
        className=" w-full  object-cover h-screen" />
      </div>
      <div className='absolute top-0 w-full mx-auto p-16'>
        <div className="max-w-2xl mx-auto pt-20 z-20 text-white">
          <div className='max-w-lg text-center '>
          <TypographyH2
          children="Our story"
          className=' text-orange-500 uppercase font-bold font-poppins text-primaryFont text-center'
          />
          </div>
          <TypographyBlockquote
          children="We give you the platform to purchase your soul wears,dress,accesories and anything about your ghanaian culture wears. You do not  need to be in Ghana to feel your culture.  "
          className="max-w-2xl shadow-lg rounded-lg leading-loose text-extraSmall tracking-wider text-white mx-auto mt-20 p-4 font-poppins"
          />
        </div>
      </div>
     
    </section>
  )
}

export default About
