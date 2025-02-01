import ProductForm from '@/app/forms/productform'
import { TypographyH2 } from '@/components/typography/h2'
import React from 'react'

interface pageprops {
    params : {
        id: string
    }
}
const page = ({params}: pageprops) => {
  return (
    <div className='p-4 md:p-12'>
      <TypographyH2 className='mb-5'>
        Edit A New Product
      </TypographyH2>
      <ProductForm/>
    </div>
  )
}

export default page
