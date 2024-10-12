import React from 'react'
import ProductCard from '../productcard'
import { cn } from '@/lib/utils'
import { StaticImageData } from 'next/image'
interface productprops {
    id:string,   
    label:string,
    imageUrl:StaticImageData | string,
    price: number ,
    description:string
}

interface productgridprops{
    className: string,
    data : productprops[]  
}
const ProductGrid = (props: productgridprops) => {
  return (
    
      <div className={cn('',props.className)}>
        {props.data.map(item => {
            return(
                <ProductCard 
                key ={item.id} 
                {...item}

                />
            )
        })}
      </div>
    
  )

}


export default ProductGrid
