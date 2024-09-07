import AdminTotalCard from '@/components/ui/admintotalcards'
import {  BarChartComp } from '@/components/ui/barchat'
import staticlist from '@/constants/staticlist'
import React from 'react'

const Admin = () => {
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
      <article className='mt-10'>
        <BarChartComp/>
      </article>
    </section>
  )
}

export default Admin
