"use client"
import { TypographyH2 } from '@/components/typography/h2'
import { TypographyH3 } from '@/components/typography/h3'
import { TypographyLarge } from '@/components/typography/large'
import { TypographyMuted } from '@/components/typography/muted'
import { TypographyP } from '@/components/typography/p'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface cardprops {
    products: any
}
const ProductCard = ({products}:cardprops) => {
    const router = useRouter()
    const calprice  = Math.ceil(products.price / 16.50)  + 50
    const gobackhandler  = () => {
        router.push('/products')
        router.refresh()
    }

    return (
    <div className='mt-12'>
        <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden object-contain">
            <Image 
            src={products.imageUrl}
            alt={`${products.label} icon`}
            width={800}
            height={800}
            className='w-full h-auto   object-cover bg-black/80'
            />
        </div>
        <div className='p-6 md:p-8 max-w-5xl'>
          <div className='flex items-center justify-between flex-wrap gap-4  '>
            <TypographyH3 className=''>
                {products.label}
            </TypographyH3>
            <div  className='flex items-center gap-2 flex-wrap bg-yellow-300 p-2 rounded-[5px]'>
            <TypographyMuted className='text-xl font-bold'>
                $ {calprice}
            </TypographyMuted>
            <TypographyMuted className='text-xl font-bold'>
               ( GHC {products.price})
            </TypographyMuted>
            </div>
          </div>
            <div className='w-full  flex items-center py-5 ' >
                <TypographyP className='text-lg  max-w-5xl  tracking-wide leading-relaxed '>
                    {products.description}
                </TypographyP>
            </div>
        </div>
        <div className="flex items-center gap-4 p-4 max-w-4xl">
            <Button
            onClick={gobackhandler}
            variant="ghost">
                go back
            </Button>
            <Button>payment info</Button>
            
        </div>

    </div>
  )
}

export default ProductCard
