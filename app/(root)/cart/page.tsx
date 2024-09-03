import { TypographyLarge } from '@/components/typography/large'
import CartCard from '@/components/ui/cartcard'
import NavLinks from '@/components/ui/navlinks'
import icons from '@/constants/icons'
import staticlist from '@/constants/staticlist'
import { cn } from '@/lib/utils'
import { cartprops } from '@/types/next'
import React from 'react'

const page = ({addedProducts,className}:cartprops) => {
  
  if( addedProducts) {
  
  return <section className={cn('pt-24',className)}>
        {/* cart cards 
        => if empty -> you have no products here
          added a button that with go back to the product page
        */}
      
      <TypographyLarge 
      content="You have no item in the Cart."
      className='p-4 text-lg text-center'
      />
      <NavLinks 
      label='add to cart'
      navicon={icons.plus}
      reff="/dashboard"
      className='flex items-center justify-center text-foreground text-lg'
      />
    </section>
  }
  return (
    <section className='flex flex-col gap-4 pt-10'>
      <TypographyLarge content="Cart" className="text-xl text-center"/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4' >
        {staticlist.fakeproducts.map(item => {
          return (<CartCard
          key={item.id}
          id={item.id}
          content={item.content}
          imageurl={item.imageurl}
          label={item.label}
          tags={item.tags}
          className=''
          />)
        })}
      </div>
    </section>
  )
}

export default page
