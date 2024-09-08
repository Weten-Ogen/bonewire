import React from 'react'
import { getdata } from '../page';
import { DataTable } from '../data-table';
import { columns } from '../columns';

const page = async() => {
  const data = await getdata();
  return (
    <div>
      <DataTable data={data} columns={columns}/>
    </div>
  )
}

export default page
