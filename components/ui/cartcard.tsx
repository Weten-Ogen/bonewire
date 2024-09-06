'use client'
import { productcardprops } from '@/types/next'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './card'
import Image from 'next/image'
import { CircleMinusIcon} from 'lucide-react'
import { Button } from './button'
import { TypographyH2 } from '../typography/typoh2'
import ProductCard from './productcard'
import { PlusIcon,MinusIcon } from 'lucide-react'
import { TypographyP } from '../typography/typoP'
import { TypographySmall } from '../typography/small'
import { UseCartStore } from '@/store/cartstore'

const CartCard = (product:productcardprops) => {
  const {count,removeItemFromCart} = UseCartStore((state) => ({
    count: state.count,
    removeItemFromCart: state.removeItemFromCart,
    
  }))

  return (
    <div className='m-4 duration-500 ease-out '>
      <Card
       className='p-0   object-contain rounded-lg outline-none bg-transparent  '>
        <CardContent className='flex flex-col object-contain  gap-2 p-0 relative bg-transparent m-0   outline-none shadow-lg'>
          <div className='object-contain h-[300px] rounded-lg overflow-hidden'>
          <Image 
          src={product.imageurl}
          alt={product.label}
          width={500}
          height={500}
          className='w-full image-square rounded-lg  object-cover'
          />
          </div>
          <article className=' flex flex-col gap-4 rounded-b-lg bg-white  shadow-lg  absolute bottom-0 w-full py-4 px-8'>
            <div className='flex items-center justify-between'>

            <TypographyH2
            className='text-xl font-bold'
            content={product.label}
            />
            <Button 
            onClick={() => {removeItemFromCart(product.id)}}
            className='capitalize px-8 py-2 font-bold text-sm touchbtn'>delete</Button>
            </div>
            <div className='flex items-center justify-between px-4'>
              <TypographyP 
              className='text-lg font-medium'
              content="Price"
              />
              <TypographySmall
              className='text-slate-500'
              content={product.price}
              />
              
            </div>
            
          </article>
        </CardContent>
      </Card>
    </div>
  )
}

export default CartCard
