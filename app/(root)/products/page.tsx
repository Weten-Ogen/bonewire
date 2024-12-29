import Filters from '@/components/sections/filters'
import ProductGrid from '@/components/sections/productgrid'
import SearchZone from '@/components/sections/searchzone'
import { TypographyLarge } from '@/components/typography/large'
import { fakedata } from '@/lib/constants'
import { headers } from 'next/headers'
import React from 'react'

export const revalidate = 3600


const Products = async() => {
  
  const products  = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`,{
    cache: "no-store",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
  
  if(!products){
    throw new Error('There is no internet connection .')
  }

  return (
    <section className='pb-10 relative w-full'>
      <div className="bg-black p-2  h-[70vh] md:h-[50vh] text-white pt-20">
     <TypographyLarge className='  text-left p-4  text-3xl md:p-2 md:max-w-2xl font-bold text-serif'>
       We have all kinds of kente products just for you.
     </TypographyLarge>
      <SearchZone 
      classsName=''/>
      
      </div>
      <ProductGrid 
      className='grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-8  pt-10  '
      data={products.data}
      />
      <p>
      </p>
  
    </section>
  )
}

export default Products
