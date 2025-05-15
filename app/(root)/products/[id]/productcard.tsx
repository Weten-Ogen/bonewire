"use client"

import { TypographyH2 } from '@/components/typography/h2'
import { TypographyH3 } from '@/components/typography/h3'
import { TypographyMuted } from '@/components/typography/muted'
import { TypographyP } from '@/components/typography/p'
import { Button } from '@/components/ui/button'
import { useUserDetailsStore } from '@/store/userdetail'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface cardprops {
    products: any
}
const ProductCard = ({products}:cardprops) => {
    const router = useRouter()
    
    const convertprice = products.price.toFixed(2)

    const gobackhandler  = () => {
        router.push('/products')
        router.refresh()
    }
    const joinroom = async() => {
        
    }
    useEffect(() => {
        joinroom()
    },[])

    return (
    <div className='mt-12 md:flex min-h-screen md:h-screen gap-8 p-4'>
        <div className="max-w-full md:h-[90vh] overflow-hidden">
            <Image 
            src={products.imageUrl}
            alt={`${products.label} icon`}
            width={800}
            height={800}
            className='max-w-full md:max-[50%] h-auto   object-cover bg-gray-400'
            />
        </div>
        <div className='w-full max-w-lg space-y-5 md:mt-10'>
          <div className='my-5'>
            <TypographyH3 className='text-primaryFont font-bold font-poppins '>
                {products.label}
            </TypographyH3>
            <div  className='w-full my-2'>
            <TypographyMuted className='text-extraSmall font-semibold text-black font-poppins'>
                GHC {convertprice }
            </TypographyMuted>
            </div>
          </div>
            <div className='w-full'  >
                <TypographyP className='text-extraSmall text-left max-w-lg font-poppins tracking-wide leading-8'>
                    {products.description}
                </TypographyP>
            </div>
            <div className=" flex items-center gap-4">
            <Button onClick={gobackhandler} className='w-full capitalize font-bold font-poppins text-extraSmall '>go back</Button>
                
                
            </div>
        </div>

    </div>
  )
}

export default ProductCard
