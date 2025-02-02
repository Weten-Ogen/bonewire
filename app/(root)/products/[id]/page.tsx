import { TypographyH2 } from '@/components/typography/h2'
import { TypographyLead } from '@/components/typography/lead'
import { TypographyP } from '@/components/typography/p'

import ProductCard from './productcard'
import { use } from 'react'

interface pagprops {
    params: {
        id: string
    }
}


export default async  function page({params}:{params : Promise<{id: string}>}) {
    const {id} = use(params)
    
    const product = await fetch(
        `${process.env. NEXT_PUBLIC_BACKEND_API_URL}/products/${id}`,
        {
        cache: "no-store",
        headers: {
            "Content-Type" : "application/json"
        }
    }).then(res => res.json())
    return (
        <div className=''>
            <ProductCard 
            products={product.data}
            />
        </div> 
)}
