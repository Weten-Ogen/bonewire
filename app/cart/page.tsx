import CartGrid from '@/components/sections/cartgrid'
import { TypographyLarge } from '@/components/typography/large'
import { fakedata } from '@/lib/constants'
import React from 'react'


const Cart = () => {
  
  return (
    <section className='mt-20  p-4 md:p-6'>
     {
      !fakedata && <TypographyLarge className="">
        You have no item in the cart
      </TypographyLarge>
     }
     {
      fakedata &&
     <CartGrid
     data={fakedata}
     className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 items-center'
     /> 
     }
    </section>
  )
}

export default Cart
