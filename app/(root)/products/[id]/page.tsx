import { TypographyH2 } from '@/components/typography/h2'
import { TypographyLead } from '@/components/typography/lead'
import { TypographyP } from '@/components/typography/p'
import ProductCard from './productcard'
import { use } from 'react'
import { getProductById } from '@/app/actions/product'


interface pagprops {
    params: {
        id: string
    }
}


export default async  function page({params}:{params : Promise<{id: string}>}) {
    const id = await params;
    const product = await getProductById(id);

    
   
    return (
        <div className=''>
            <ProductCard
                products={product}
                
            />        
        </div> 
)}
