"use client"
import React, { useCallback, useEffect, useState } from 'react'
import AdminProductCard from './productcard'
import { cn } from '@/lib/utils'
import { filterlist } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Loader, Loader2 } from 'lucide-react'




interface productprops {
    id:string,   
    label:string,
    imageUrl:string,
    price: string,
    description:string,
    tag:string,
    createdAt:Date,
}

interface productgridprops{
    className: string,
    data : productprops[]  
}
const AdminProductGrid = (props: productgridprops) => {
    const [products, setProducts] = useState<any>([])
    const [loading , setLoading] = useState<boolean>(false)
    const [filter, setFilter]= useState<any>("all")
    

    const handlefirstfetch = () => {
      setLoading(true)
      setProducts((prev:any) => [...prev,...props.data])
      setLoading(false)
    }
    const handlefilterSearch = (filt: string) => {
      setFilter(filt);
      setLoading(true);
    
      if (filt.toLowerCase() === 'all') {
        setProducts(props.data);
      } else {
        const filtered = props.data.filter((prod: any) => prod.tag.toLowerCase() === filt.toLowerCase());
        setProducts(filtered);
      }
      setLoading(false)
    }

    useEffect(() => {
        handlefirstfetch()
    },[])
   

    return (
    <div className='flex flex-col items-start relative'>
     <div className='flex flex-wrap gap-2 p-4 mt-5 '>
        {filterlist.map(item => {
          return (
            <Button 
            onClick={() => {
              handlefilterSearch(item.label) 
            }}
            className={` capitalize px-6 font-poppins ${filter === item.label.toLowerCase() ?  'text-extraSmall font-bold -translate-y-0.5 duration-500 ease-out' : 'text-sm'}`} 
             key={item.label}>
              {item.label}
            </Button>
          )
        })}
      </div>
{     
loading ?
   <Loader 
      
      size={40}
      className='animate-spin bg-secondaryColor  font-bold flex items-center justify-center w-full ' 
    />
   :
      <div className='grid grid-cols-1 md:grid-cols-3  items-center justify-center gap-8 p-4 w-full mx-auto'>
        {products.map((item:any,index:number )=> {
            return(
                
                    <AdminProductCard 
                    key ={index} 
                    {...item}
                    />
            
            )
        })}
      </div>
      }
      
    
    </div>
  )

}



export default AdminProductGrid
