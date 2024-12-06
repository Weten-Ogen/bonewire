import Filters from '@/components/sections/filters'
import ProductGrid from '@/components/sections/productgrid'
import SearchZone from '@/components/sections/searchzone'
import { TypographyLarge } from '@/components/typography/large'
import { fakedata } from '@/lib/constants'
import { headers } from 'next/headers'
import React from 'react'

export const revalidate = 3600


const Products = async() => {
  
  const products  = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
 
  return (
    <section className='pb-10'>
      <div className="bg-black p-2 h-[80vh] md:h-[50vh] text-white pt-20">
     <TypographyLarge className=' capitalize text-left p-4  text-3xl md:text-4xl font-bold'>
       Get value for everything you purchase on this here.
     </TypographyLarge>
      <SearchZone 
      classsName=''/>
      <Filters
        className='pt-5 md:pt-5'
        />
      </div>
      <ProductGrid 
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-8  pt-10  '
      data={products.data}
      />
      <p>
      </p>
    </section>
  )
}

export default Products