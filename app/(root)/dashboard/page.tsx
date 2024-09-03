import FilterLinks from '@/components/ui/filterlinks'
import Headers from '@/components/ui/headers'
import SearchBtn from '@/components/ui/searchbtn'
import staticlist from '@/constants/staticlist'
import { cn } from '@/lib/utils'
import { dashboardprops } from '@/types/next'
import React from 'react'


const page = ({className}:dashboardprops
) => {
  return (
    <section className={cn('pt-5 md:w-[95%] mx-auto',className)}>
      <Headers 
       className=''
       content='We have the best kente product that suits your tastes'
       contentClass='max-w-sm md:max-w-lg  p-4'
       subcontent=''
       subcontentClass=''
      />
      <article className='pt-5 mt:pt-2'>
        <SearchBtn 
        className="w-full md:w-[70%] md:flex items-center  gap-8 p-2 "
        />

      </article>
      <article className='pt-4 w-full'>
        <FilterLinks 
        filters={staticlist.filterlist}
        className='w-full  grid grid-cols-4 md:items-start md:grid-cols-12'
        />
      </article>

    </section>
  )
}

export default page