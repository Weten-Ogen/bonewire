'use client'
import { productcardprops } from '@/types/next'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './card'
import Image from 'next/image'
import { CircleMinusIcon} from 'lucide-react'
import { Button } from './button'


const CartCard = (product:productcardprops) => {
  return (
    <div className='p-3 md:p-0 h-[560px] m-2  '>
      <Card
      
       className='p-0   object-contain rounded-lg outline-none bg-transparent  '>
        <CardContent className='flex flex-col object-contain  gap-2 p-0 relative bg-transparent m-0   outline-none shadow-lg'>
          <div className='w-full h-[200px] oveflow-hidden object-cotain'>

          <Image 
          src={product.imageurl}
          alt={product.label}
          width={200}
          height={200}
          className='w-full rounded-lg  object-cover'
          />
          </div>
          <article className='p-2 flex flex-col gap-4 rounded-b-lg bg-white shadow-lg h-full'>
            <div className="flex items-center justify-between space-y-2 h-full ">
            <CardTitle className='text-lg '>
              {product.label}
            </CardTitle>
            <Button 
             className='flex items-center gap-2 bg-primary p-2 cursor-pointer touchbtn rounded-lg'>
             remove Item
                <CircleMinusIcon 
                size={32}
                className='cursor-pointer bg-yellow-500 rounded-full p-2'/>
            </Button>
            </div>
            
          </article>
        </CardContent>
      </Card>
    </div>
  )
}

export default CartCard
