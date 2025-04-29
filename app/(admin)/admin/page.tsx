import { TypographyH2 } from '@/components/typography/h2'
import AdminCards from '@/components/ui/admincards'
import React from 'react'
import Back from './goback'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col '>
      <div  className='flex items-center gap-10'>
        <Back/>
        <Link className='text-secondaryColor  font-bold capitalize text-primaryFont' href="/upload">upload images</Link>
      </div>
      <AdminCards/>
    </div>
  )
}

export default page
