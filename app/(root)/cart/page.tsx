import { TypographyLarge } from '@/components/typography/large'
import CartCard from '@/components/ui/cartcard'
import icons from '@/constants/icons'
import staticlist from '@/constants/staticlist'
import { cn } from '@/lib/utils'
import React from 'react'

const page = () => {
    return (
    <section className='flex flex-col gap-4 pt-10'>
      <TypographyLarge content="Cart" className="text-xl text-center"/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4' >
        {staticlist.products.map(item => {
          return (<CartCard
          key={item.id}
          id={item.id}
          content={item.content}
          imageurl={item.imageurl}
          label={item.label}
          tags={item.tags}
          gender={item.gender}
          price={item.price}
          className=''
          />)
        })}
      </div>
    </section>
  )
}

export default page
