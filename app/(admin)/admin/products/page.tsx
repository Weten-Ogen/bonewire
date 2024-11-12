import {  getproducts } from '@/app/actions/fetch'
import { DataTable } from '@/components/tables/data-table'
import { productColumns } from '@/components/tables/product-columns'
import { fakedata } from '@/lib/constants'
import React from 'react'


const Products = async () => {
  const productsdata=  await getproducts()

  return (
    <section className="p-8">
      <DataTable
      data={productsdata.data} 
      columns={productColumns} />
    </section>
  )
}

export default Products
