import React from 'react'
import CartItemCard from '../ui/cartitemcard'
import { StaticImageData } from 'next/image'
interface cartItem {
    id:string,   
    label:string,
    imageUrl:string | StaticImageData,
    price: number ,
    description:string
}

interface cartgridprops{
  className?: string,
  data: cartItem[]
}

const CartGrid = (props:cartgridprops) => {
  return (
    <div
     className='flex flex-col gap-4'>{
        props.data.map(item => {
          return (
            <CartItemCard
            className='' 
            key={item.id}
            {...item}
            />
          )
        })
      }
    </div>
  )
}

export default CartGrid
