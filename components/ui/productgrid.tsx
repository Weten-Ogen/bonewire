import { productgrid } from '@/types/next'
import React from 'react'
import ProductCard from './productcard'

const ProductGrid = ({products}:productgrid) => {
  return (
    <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  justify-center md:justify-evenly  gap-4 mt-5 '>
      {products.map(item => {
        return (
            <ProductCard 
            key ={item.id}
            content={item.content}
            gender={item.gender}
            imageurl={item.imageurl}
            id={item.id}
            label={item.label}
            price={item.price}
            tags={item.tags}
            className=""
            />
        )
      })}
    </article>
  )
}

export default ProductGrid
