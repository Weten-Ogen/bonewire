import CartGrid from '@/components/sections/cartgrid'
import { fakedata } from '@/lib/constants'
import React from 'react'


const Cart = () => {
  
  return (
    <section className='mt-20  md:p-8 lg:p-16'>
     <CartGrid
     data={fakedata}
     className=''
     /> 
    </section>
  )
}

export default Cart
