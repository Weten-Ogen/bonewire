import { TypographyLead } from '@/components/typography/lead'
import { TypographyP } from '@/components/typography/p'
import { TypographyLarge } from '@/components/typography/small'
import { Button } from '@/components/ui/button'
import { fakedata } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

interface productpageprops {
    params : {
        id: string
    }
}



const ProductPage = (props:productpageprops) => {
    const {id} = props.params
    

    return (
    <section className='mt-12 h-screen overflow-hidden'>
    <div className='w-full h-[300px] overflow-none bg-black'>
        <Image
        src=""
        alt=""
        width={500}
        height={500}
        className="w-full h-auto object-cover"
        />
    </div>
    <div className='p-4 flex flex-col items-start gap-5'>
        <div className='flex items-center justify-between w-full'>
        <TypographyLarge className='uppercase text-2xl'>
        o
        </TypographyLarge>
        <TypographyP className='text-lg bg-orange-500 rounded-sm p-2'>
        g
        </TypographyP>
        </div>
        <TypographyP className=''>
            g
        </TypographyP>
    </div>
    <div className='text-lg  p-4'>
        <Button className='w-full uppercase '>add to cart</Button>
    </div>
    </section>

)
}

export default ProductPage
