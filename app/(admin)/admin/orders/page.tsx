import React from 'react'
import { DataTable } from '../data-table'
import { columns } from '../columns'
import { getdata } from '../page'

const page = async() => {
  const data = await getdata()
  return (
    <div>
      <DataTable data={data} columns={columns}/>
    </div>
  )
}

export default page