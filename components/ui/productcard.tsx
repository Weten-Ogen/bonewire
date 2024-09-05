'use client'
import { productcardprops } from '@/types/next'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './card'
import Image from 'next/image'
import {ArrowDownIcon, CirclePlusIcon} from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'

const ProductCard = ({content,gender,price,id,imageurl,label,tags,className}:productcardprops) => {
  return (
    <div className='p-5 md:p-0 h-[560px] overflow-hidden  '>
      <Card
      
       className='p-0   object-contain outline-none bg-transparent  '>
        <CardContent className='flex flex-col object-contain  gap-2 p-0 relative bg-transparent m-0  outline-none shadow-lg'>
          <div className='w-full h-[200px] oveflow-hidden object-cotain'>

          <Image 
          src={imageurl}
          alt={label}
          width={200}
          height={200}
          className='w-full rounded-lg  object-cover'
          />
          </div>
          <article className='p-2 flex flex-col gap-4  bg-white shadow-lg h-full'>
            <div className="flex items-center justify-between space-y-2 h-full">
            <CardTitle className='text-lg '>
              {label}
            </CardTitle>
            <div className='flex items-center gap-2 bg-primary p-2 cursor-pointer'>
             add to cart
                <CirclePlusIcon 
                size={32}
                className='cursor-pointer bg-yellow-500 rounded-full p-2'/>
            </div>
            </div>
            <CardDescription className='px-1 line-clamp-2'>
              {content}
            </CardDescription>
            <div className='flex flex-col gap-2 rounded-lg '>
              <div  className='flex items-center justify-between gap-4 '>
                <p className='font-bold'>Name</p>

                <p className='font-medium text-gray-500 leading-tight text-sm'>{label}</p>
              </div>
              <div className='flex items-center justify-between gap-4 '>
              <p className='font-bold'>Price</p>
              <p className='font-medium leading-tight  text-sm text-gray-400'>{price}</p>
              </div>
              <div className='flex items-center justify-between gap-4 '>
              <p className='font-bold'>Gender</p>
              <p className='font-medium text-gray-400 leading-tight text-sm '>{gender}</p>
              </div>
          </div>
          <Link 
          href={`/dashboard/${id}`} 
          className='w-full my-3 p-2 flex items-center justify-center rounded-xl bg-primary  gap-4'>
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
