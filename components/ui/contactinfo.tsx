"use client"
import React from 'react'
import { TypographyH3 } from '../typography/h3'
import { TypographyP } from '../typography/p'


const Contactinfo = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 text-center md:text-left p-4'>
      <div className=''>
        <TypographyH3 className='uppercase font-serif text-lg '>contact us :</TypographyH3>
        <div className=''>
        <TypographyP className='text-lg tracking-wide font-normal'>0599637932</TypographyP>
        <TypographyP className='text-lg tracking-wide font-normal'>0538587513</TypographyP>
        </div>
      </div>
      <div className=''>
        <TypographyH3 className='uppercase font-serif text-lg'>mail us :</TypographyH3>
        <div>
        <TypographyP className='text-lg tracking-wide font-normal'>bonewire@gmail.com</TypographyP>
        <TypographyP className='text-lg tracking-wide font-normal'>@bonewire.shop on ig</TypographyP>
        </div>
      </div>  
      <div className=''>
        <TypographyH3 className='uppercase text-lg font-serif'>locate us :</TypographyH3>
        <div>
        <TypographyP className='text-lg tracking-wide font-normal'>Bonwire
        </TypographyP>
        <TypographyP className='text-lg tracking-wide font-normal'>Ejisu,Ashanti Region, Ghana</TypographyP>
        </div>
      </div>
    </div>
  )
}

export default Contactinfo
