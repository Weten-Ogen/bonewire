import { TypographyH2 } from '@/components/typography/h2'
import { TypographyLead } from '@/components/typography/lead'
import { TypographyP } from '@/components/typography/p'
import Image from 'next/image'
import ProductCard from './productcard'

interface pageprops {
    params: {
        id: string
    }
}


const ProductPage = async({params}:pageprops) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products/${params.id}`,{
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
   
)
}

export default ProductPage
