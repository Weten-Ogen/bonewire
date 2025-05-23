import { getProducts } from '@/app/actions/product'
import ProductGrid from '@/components/sections/productgrid'
import SearchZone from '@/components/sections/searchzone'
import { TypographyLarge } from '@/components/typography/large'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export const revalidate = 3500


const Products = async() => {
  const products =  await getProducts();    
  return (
    <section className='pb-10 relative w-full'>
      <div className="bg-black p-2  h-[70vh] md:h-[50vh] text-white pt-20">
     <TypographyLarge className='  text-left p-4  text-primaryFont md:p-2 md:max-w-2xl font-bold text-poppins'>
       We have all kinds of kente products just for you.
     </TypographyLarge>
        <form  className=''>
          <Input 
                className='text-primaryFont font-poppins font-bold w-full p-6 my-4 text-white'
                 placeholder='search for all products here ...'      
                 />
                <Button  className='w-full md:w-[30%] p-6 text-extraSmall font-poppins font-bold uppercase'>Search</Button>
        </form>
      
      </div>
      <ProductGrid
      className=''
      data={products}
      
      />
    </section>
  )
}

export default Products
