'use client'
import { productcardprops } from '@/types/next'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './card'
import Image from 'next/image'
import {CirclePlusIcon} from 'lucide-react'

const ProductCard = ({content,gender,price,id,imageurl,label,tags,className}:productcardprops) => {
  return (
    <div className='p-2'>
      <Card className='p-0 '>
        <CardContent className='flex flex-col  gap-2 p-0 rounded-lg '>
          <Image 
          src={imageurl}
          alt={label}
          width={200}
          height={200}
          className='w-full rounded-lg aspect-square'
          />
          <div className='p-2 flex flex-col gap-3'>
            <div className="flex items-center justify-between">
            <CardTitle className='text-lg '>
              {label}
            </CardTitle>
            <div className='flex items-center gap-2 bg-primary p-2'>
             add to cart
                <CirclePlusIcon 
                size={24}
                className='cursor-pointer'/>
            </div>
            </div>
            <CardDescription className='px-1'>
              {content}
            </CardDescription>
            <div className='flex flex-col gap-4 rounded-lg '>
              <div  className='flex items-center justify-between gap-4 '>
                <p className='font-bold'>Name</p>
                <p className='font-medium bg-primary leading-tight text-sm'>{label}</p>
              </div>
              <div className='flex items-center justify-between gap-4 '>
              <p className='font-bold'>Price</p>
              <p className='font-medium bg-primary leading-tight  text-sm'>{price}</p>
              </div>
              <div className='flex items-center justify-between gap-4 '>
              <p className='font-bold'>Gender</p>
              <p className='font-medium leading-tight text-sm bg-primary'>{gender}</p>
              </div>
          </div>

            
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
