import { getproductsbyid } from '@/app/actions/fetch'
import { TypographyH1 } from '@/components/typography/h1'
import { TypographyH2 } from '@/components/typography/h2'
import { TypographyLead } from '@/components/typography/lead'
import { TypographyP } from '@/components/typography/p'
import { TypographyLarge } from '@/components/typography/small'
import { Button } from '@/components/ui/button'
import { fakedata } from '@/lib/constants'
import { PRERENDER_MANIFEST } from 'next/dist/shared/lib/constants'
import Image from 'next/image'
import React from 'react'

interface productpageprops {
    params : {
        id: string
    }
}



const ProductPage = async(props:productpageprops) => {
    const {id} = props.params
    const product = await getproductsbyid(id)
    const calprice  = Math.ceil(product.data.price / 16.50)  + 50
    if(!product.success) {
        return <div>check your internet </div>
    }

    return (
    <section className='mt-12 min-h-screen overflow-hidden'>
    <div className='w-full h-[60vh] relative overflow-none'>
        <Image
        src={product.data.imageUrl}
        alt={product.data.label}
        width={800}
        height={800}
        className="w-full h-[60vh] object-cover"
        />
        <div className='absolute inset-0 bg-black/60 z-10'/>
    </div>
    <div className='p-4 flex flex-col my-4'>
        <div className='flex p-2 items-center justify-between w-full'>
        <TypographyH2 className='uppercase text-2xl'>
        {product.data.label}
        </TypographyH2>
        <div className='flex items-center gap-2  flex-wrap'>
        
        <TypographyLead className='text-lg '>
         GHC {product.data.price}
        </TypographyLead>
        <TypographyLead className='text-lg '>
        ($ {calprice})
        </TypographyLead>
        </div>
        </div>
        <TypographyP className=''>
            {product.data.description}
        </TypographyP>
    </div>
    <div className='text-lg  p-4'>
        <Button className='w-full uppercase '>add to cart</Button>
    </div>
    </section>

)
}

export default ProductPage
