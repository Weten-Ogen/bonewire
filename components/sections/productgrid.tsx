"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '../productcard'
import { cn } from '@/lib/utils'
import { StaticImageData } from 'next/image'
import { getUserInfo } from '@/app/actions/authservice'
import { getproducts} from '@/app/actions/fetch'

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
  const [products , setProducts] = useState<any>([])
  const [id, setId] = useState<any>()

  const getId = () => {
        const myid = getUserInfo()
        setId((prev:any)=> prev = myid?.id)
  }

  const getproduct = async() => {
        const fetcheddata = await getproducts()

        setProducts((prev:any) => [prev,...fetcheddata?.data])
  }

  useEffect(() => {
    getId()
    getproduct()
  },[id])

    return (
      <div className={cn('p-4 ',props.className)}>
        {products && products.map((item:any )=> {
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
