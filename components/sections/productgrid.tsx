"use client"
import React, { useCallback, useEffect, useState } from 'react'
import ProductCard from '../productcard'
import { cn } from '@/lib/utils'
import { filterlist } from '@/lib/constants'
import { Button } from '../ui/button'
import { getfilters } from '@/app/actions/actions'
import { Loader, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'


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

    const handlefiltsetter = async() => {
      if(filter !== "all"){
        setLoading(prev => !prev)
        const newfetcheddata = await getfilters(filter);
        setLoading(prev => !prev)
        setProducts((prev:any) => [...newfetcheddata.data])
        return 
      }
      setProducts((prev:any) => [...props.data])
      
    }
      

    useEffect(() => {
        handlefirstfetch()
    },[])
    useEffect(() => {
      handlefiltsetter()
    },[filter])

    
    
   

    return (
    <div className='flex flex-col items-start '>
     <div className='flex flex-wrap gap-2 p-4 mt-5 '>
        {filterlist.map(item => {
          return (
            <Button 
            onClick={() => {
              setFilter(item.label)
              
            }}
            className={` capitalize px-6 ${filter === item.label.toLowerCase() ?  'text-sm font-bold -translate-y-0.5 duration-500 ease-out' : 'text-sm'}`} 
             key={item.label}>
              {item.label}
            </Button>
          )
        })}
      </div>
{     
loading ? <Loader 
size={40}
className='animate-spin  font-bold flex items-center justify-center w-full' /> :
      <div className={cn('p-4  ',props.className)}>
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
