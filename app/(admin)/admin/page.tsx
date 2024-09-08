
import AdminTotalCard from '@/components/ui/admintotalcards'
import {  BarChartComp } from '@/components/ui/barchat'
import { LineChartComp } from '@/components/ui/linechart'
import staticlist from '@/constants/staticlist'
import React from 'react'
import { DataTable } from './data-table'
import { columns, Payment } from './columns'


export async function getdata():Promise<Payment[]> { 
  return  [
    {
      id: "1",
      amount: 150.75,
      status: "processing",
      email: "user1@example.com"
    },
    {
      id: "2",
      amount: 99.99,
      status: "success",
      email: "user2@example.com"
    },
    {
      id: "3",
      amount: 200.00,
      status: "failed",
      email: "user3@example.com"
    },
    {
      id: "4",
      amount: 50.50,
      status: "pending",
      email: "user4@example.com"
    },
    {
      id: "5",
      amount: 300.25,
      status: "success",
      email: "user5@example.com"
    },
    {
      id: "6",
      amount: 75.00,
      status: "processing",
      email: "user6@example.com"
    },
    {
      id: "7",
      amount: 120.45,
      status: "failed",
      email: "user7@example.com"
    },
    {
      id: "8",
      amount: 180.99,
      status: "pending",
      email: "user8@example.com"
    },
    {
      id: "9",
      amount: 250.00,
      status: "success",
      email: "user9@example.com"
    },
    {
      id: "10",
      amount: 30.75,
      status: "processing",
      email: "user10@example.com"
    }
  ];
   

}



const Admin  = async() =>  {
  const data = await getdata();
  
  return (
    <section className='w-full min-h-screen'>
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between'>
        {staticlist.totaldashboardinfo.map(item => {
          return(
          <AdminTotalCard
            key={item.label}
            end={item.end}
            label={item.label}
            prefix=''
            suffix=''
            className=''
          />)
        })}
      </div>
      <article className='mt-20 grid lg:grid-cols-2 gap-4 items-center'>
        <BarChartComp/>
        <LineChartComp/>
      </article>
      <article className='mt-10 '>
        <DataTable data={data} columns={columns}/>
      </article>
    </section>
  )
}

export default Admin