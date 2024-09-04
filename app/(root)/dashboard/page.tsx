import FilterLinks from '@/components/ui/filterlinks'
import Headers from '@/components/ui/headers'
import SearchBtn from '@/components/ui/searchbtn'
import staticlist from '@/constants/staticlist'
import { cn } from '@/lib/utils'
import React from 'react'


const page = (
) => {
  return (
    <section className='pt-5 md:w-[95%] mx-auto'>
      <Headers 
       className=''
       content='We have the best kente product that suits your tastes'
       contentClass='max-w-sm md:max-w-md text-2xl leading-loose p-2 md:p-0'
       subcontent=''
       subcontentClass=''
      />
      <article className='pt-5 mt:pt-0'>
        <SearchBtn 
        className="w-full md:w-[70%] md:flex items-center  md:gap-4  p-2 md:py-2 md:px-0 "
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