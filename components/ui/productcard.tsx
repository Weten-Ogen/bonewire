'use client'

import { productcardprops } from '@/types/next'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './card'
import Image from 'next/image'

const ProductCard = ({content,price,id,imageurl,label,tags,className}:productcardprops) => {
  return (
    <div className=''>
      <Card className=''>
        <CardContent className=''>
          <Image 
          src={imageurl}
          alt={label}
          width={250}
          height={250}
          />
          <CardTitle className=''>
             {label}
          </CardTitle>
          <CardDescription className=''>
             {content}
          </CardDescription>
          <div className=''>
            <div>
              <p>Name</p>
              <p>{label}</p>
            </div>
            <div>
            <p>Price</p>
            <p>{price}</p>
            </div>
            <div>
            <p>Gender</p>
            <p>{gender}</p>
            </div>

            
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
