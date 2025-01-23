"use client"
import React from 'react'
import { TypographyH3 } from '../typography/h3'
import { TypographyP } from '../typography/p'
import { foooterlinks } from '@/lib/constants'
import Link from 'next/link'


const Contactinfo = () => {
  return (
    <div className='w-full max-w-4xl mx-auto  h-[5vh]'>
      <div className='flex items-center justfy-between gap-16 uppercase text-sm'>
       {
        foooterlinks.map((item) => {
         return <Link 
            className="hover:-translate-y-0.5 duration-300 ease-out "
          href={item.reff}>
            {item.label}
          </Link>
        })
       }
      </div>
        
      
        
       
     
    </div>
  )
}

export default Contactinfo
