'use client'
import { TypographyLarge } from '@/components/typography/large'
import CartCard from '@/components/ui/cartcard'
import icons from '@/constants/icons'
import staticlist from '@/constants/staticlist'
import { cn } from '@/lib/utils'
import { UseCartStore } from '@/store/cartstore'
import React from 'react'

const page = () => {
  const {cart} = UseCartStore((state) => ({
    cart:state.cart
  }))
  return (
    <section className='flex flex-col gap-4 pt-10'>
      <TypographyLarge content="Cart" className="text-xl text-center"/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4' >
        {cart ? 
        <div className=''>
          {
          cart.map(item => {return(<CartCard key={item.id + item.imageurl} {...item}/>)})}
        </div>
        :<p>
          there are no items in the cart
        </p>} 
      </div>
    </section>
  )
}

export default page
