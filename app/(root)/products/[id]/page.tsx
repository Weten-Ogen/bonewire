import { TypographyH2 } from '@/components/typography/h2'
import { TypographyLead } from '@/components/typography/lead'
import { TypographyP } from '@/components/typography/p'

import ProductCard from './productcard'

interface pagprops {
    params: {
        id: string
    }
}


export default async  function page({params}:pagprops) {
    
    const product = await fetch(
        `${process.env. NEXT_PUBLIC_BACKEND_API_URL}/products/${params.id}`,
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
