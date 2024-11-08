import Filters from '@/components/sections/filters'
import ProductGrid from '@/components/sections/productgrid'
import SearchZone from '@/components/sections/searchzone'
import { TypographyLarge } from '@/components/typography/large'
import { fakedata } from '@/lib/constants'
import React from 'react'

interface propductsprops {

}
const Products = () => {
  return (
    <section className=''>
      <div className="bg-black p-2 h-[60vh] text-white pt-20">
     <TypographyLarge className='text-2xl mdtext-4xl'>
       Get value for everything you purchase on this here.
     </TypographyLarge>
      <SearchZone 
      classsName=''/>
      <Filters
        className='mt-5'
        />
      </div>
      <ProductGrid 
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4'
      data={fakedata}
      />
      <p>
      </p>
    </section>
  )
}

export default Products
