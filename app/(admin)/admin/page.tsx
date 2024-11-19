import { getUserInfo } from '@/app/actions/authservice'
import { TypographyH2 } from '@/components/typography/h2'
import AdminCards from '@/components/ui/admincards'
import React from 'react'
import Back from './goback'

const page = () => {
  return (
    <div className='flex flex-col '>
      <Back/>
      
      <AdminCards/>
    </div>
  )
}

export default page
