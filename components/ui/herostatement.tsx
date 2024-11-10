"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { TypographyBlockquote } from '@/components/typography/blockquote'


interface heroprops {
    className: string
}
const HeroStatement = (props:heroprops) => {
  return (
    <section id="productsection" className={cn('',props.className)}>
      <TypographyBlockquote className='text-md md:text-lg'>
        Bonewire is the Leading Ecommerce platform that makes you experience Ghana through culture.All products are hand-made the african way. Africans take pride in their culture because of the blood and tears invested in the process. 
        We aim to make everyone experience the true BlackStar spirit of an African. Our Ancestors laid their blood for the freedom to experience our culuture.
        Do not miss out being an African, African, is not where you are born , is who you are and never look down on that.
        Take pride in your Identity with us.
      </TypographyBlockquote>
    </section>
  )
}

export default HeroStatement
