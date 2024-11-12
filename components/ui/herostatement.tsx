"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { TypographyBlockquote } from '../typography/block'





interface heroprops {
    className: string
}
const HeroStatement = (props:heroprops) => {
  return (
    <section id="productsection" className={cn('h-[70vh] relative w-full  ',props.className)}>
      <div className='w-full  h-[40vh] p-4'>
        <video width='800' className='w-full h-[60vh]' height="800"  
        muted 
        autoPlay 
        loop >
          <source 
          src="https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/hero-cz5Q8VVWebkyiN3FgvDiunqjYFhR3o.mp4" 
           type="video/mp4"/>
        </video>
      </div>
      <div className="z-20 absolute inset-0 bg-black/50 w-full h-full p-8 flex items-center justify-center ">

      <TypographyBlockquote className='text-md md:text-lg md:max-w-2xl'>
        Bonewire is the Leading Ecommerce platform that makes you experience Ghana through culture.All products are hand-made the african way. Africans take pride in their culture because of the blood and tears invested in the process. 
        We aim to make everyone experience the true BlackStar spirit of an African. Our Ancestors laid their blood for the freedom to experience our culuture.
        Do not miss out being an African, African, is not where you are born , is who you are and never look down on that.
        Take pride in your Identity with us.
      </TypographyBlockquote>
      </div>
    </section>
  )
}

export default HeroStatement
