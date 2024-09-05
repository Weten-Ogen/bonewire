'use client'
import { productcardprops } from '@/types/next'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './card'
import Image from 'next/image'
import {ArrowDownIcon, CirclePlusIcon} from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'
import { UseCartStore } from '@/store/cartstore'

const ProductCard = (product:productcardprops) => {
  
  const {cart,addItemtoCart} = UseCartStore((state) => ({
    cart: state.cart,
    addItemtoCart: state.addItemToCart,
  }))
  return (
    <div className='p-3 md:p-0  m-2  '>
      <Card
      
       className='p-0   object-contain rounded-lg outline-none bg-transparent  '>
        <CardContent className='flex flex-col object-contain  gap-2 p-0 relative bg-transparent m-0   outline-none shadow-lg'>
          <div className='w-full h-[300px] oveflow-hidden object-cotain'>

          <Image 
          src={product.imageurl}
          alt={product.label}
          width={350}
          height={350}
          className='w-full rounded-lg  object-cover'
          />
          </div>
          <article className='p-2 flex flex-col gap-4 rounded-b-lg bg-white shadow-lg h-full'>
            <div className="flex items-center justify-between space-y-2 h-full ">
            <CardTitle className='text-lg '>
              {product.label}
            </CardTitle>
            <Button onClick={() =>{
              addItemtoCart(product)
            }
            } className='flex items-center gap-2 bg-primary p-2 cursor-pointer touchbtn rounded-lg'>
             add to cart
                <CirclePlusIcon 
                size={32}
                className='cursor-pointer bg-yellow-500 rounded-full p-2'/>
            </Button>
            </div>
            <CardDescription className='px-1 line-clamp-2'>
              {product.content}
            </CardDescription>
            <div className='flex flex-col gap-2 rounded-lg '>
              <div  className='flex items-center justify-between gap-4 '>
                <p className='font-bold'>Name</p>

                <p className='font-medium text-gray-500 leading-tight text-sm'>{product.label}</p>
              </div>
              <div className='flex items-center justify-between gap-4 '>
              <p className='font-bold'>Price</p>
              <p className='font-medium leading-tight  text-sm text-gray-400'>{product.price}</p>
              </div>
              <div className='flex items-center justify-between gap-4 '>
              <p className='font-bold'>Gender</p>
              <p className='font-medium text-gray-400 leading-tight text-sm '>{product.gender}</p>
              </div>
          </div>
          <Link 
          href={`/dashboard/${product.id}`} 
          className='w-full my-3 p-2 flex items-center justify-center   rounded-lg bg-primary  gap-4 touchbtn'>
            <p className='tracking-wide'>read more</p>
            <ArrowDownIcon 
            className='bg-yellow-500 rounded-full p-2'
            size={32}/>
          </Link>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
