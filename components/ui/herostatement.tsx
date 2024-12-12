"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { TypographyBlockquote } from '../typography/block'





interface heroprops {
    className: string
}
const HeroStatement = (props:heroprops) => {
  return (
    <div 
    className={cn('bg-black h-screen w-full my-10 md:my-20  relative ',props.className)}>
      <div className='custom-shape-divider-top-1734018776'>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
      </div>

      <div className='w-full flex items-center justify-center py-28 px-8 rounded-lg  md:my-12 md:px-4'>
        <video width='800' 
        className='w-full h-[65vh]  '
         height="auto"  
        muted 
        autoPlay
        loop >
          <source 
          src="https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/hero-cz5Q8VVWebkyiN3FgvDiunqjYFhR3o.mp4" 
          type="video/mp4"/>
        </video>
      </div>
      <div className="z-20 absolute inset-0 w-full p-8 md:flex items-center hidden justify-center ">

      <TypographyBlockquote className='text-md md:text-lg md:max-w-2xl'>
        Bonewire is the Leading Ecommerce platform that makes you experience Ghana through culture.All products are hand-made the hiddenafrican way. Africans take pride in their culture because of the blood and tears invested in the process. 
        We aim to make everyone experience the true BlackStar spirit of an African. Our Ancestors laid their blood for the freedom to experience our culuture.
        Do not miss out being an African, African, is not where you are born , is who you are and never look down on that.
        Take pride in your Identity with us.
      </TypographyBlockquote>
      </div>
     
    </div>
  )
}

export default HeroStatement
