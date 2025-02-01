"use client"
import React from 'react'
import { foooterlinks } from '@/lib/constants'
import Link from 'next/link'


const Contactinfo = () => {
  return (
    <div className='w-full max-w-4xl mx-auto  h-[12vh]'>
      <div className='flex items-center justfy-between flex-wrap gap-8 p-4 uppercase text-extraSmall font-poppins font-bold'>
       {
        foooterlinks.map((item) => {
         return <Link 
            key={item.label}
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
