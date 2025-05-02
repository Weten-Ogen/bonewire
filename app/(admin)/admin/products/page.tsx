import { getProducts } from '@/app/actions/product'
import React from 'react'
import AdminProductGrid from './productgrid'
import Back from '../goback'


export const dynamic = 3000

const Products = async () => {
  const products = await getProducts()

  return (
    <section className="p-4 flex flex-col gap-10  mt-0">
      <Back
        path='/admin/'
        label='go back to admin'
      />
      <AdminProductGrid
        className=''
        data={products}
      />
    </section>
  )
}

export default Products
