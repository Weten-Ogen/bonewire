"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '../productcard'
import { cn } from '@/lib/utils'
import { filterlist } from '@/lib/constants'
import { Button } from '../ui/button'
import { getfilters } from '@/app/actions/actions'
import { Loader2 } from 'lucide-react'


interface productprops {
    id:string,   
    label:string,
    imageUrl:string,
    price: number,
    description:string,
    tag:string,
}

interface productgridprops{
    className: string,
    data : productprops[]  
}
const ProductGrid = (props: productgridprops) => {
    const [products, setProducts] = useState<any>([])
    const [loading , setLoading] = useState<boolean>(false)
    const [filter, setFilter]= useState<any>("all")

    const handlefirstfetch = () => {
        setProducts((prev:any) => [...props.data])
    }

    const handlefilterset = async(label:any) => {
        setFilter((prev:any) => label)
        if(filter !== "all") {

            const fetchdata = await getfilters(filter);
            setLoading(prev => !prev)
            setProducts((prev:any) => prev= fetchdata.data)
            setLoading(prev => !prev)
            return
        }
        setProducts((prev:any) => props.data)
    }

    const handlefilterfetch = () => {

    }

    useEffect(() => {
        handlefirstfetch()
    },[])
    
    
   

    return (
    
    <div className='flex flex-col items-start gap-8 md:gap-6 '>
     <div className='flex flex-wrap gap-2 p-4 '>
        {filterlist.map(item => {
          return (
            <Button 
            onClick={() => handlefilterset(item.label)}
            className={` capitalize px-6 ${filter === item.label.toLowerCase() ?  'text-xl font-bold' : 'text-sm'}`} 
             key={item.label}>
              {item.label}
            </Button>
          )
        })}
      </div>
{     
loading ? <Loader2 className='' /> :
      <div className={cn('p-4 ',props.className)}>
        {products.map((item:any )=> {
            return(
                
                    <ProductCard 
                    key ={item.id} 
                    {...item}
                    />
            
            )
        })}
      </div>
      }
    </div>
    
  )

}


export default ProductGrid
