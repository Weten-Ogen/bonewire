import { getUserInfo } from '@/app/actions/authservice'
import { TypographyH2 } from '@/components/typography/h2'
import AdminCards from '@/components/ui/admincards'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      {/* various call to action on the admin page */}
      <AdminCards/>
    </div>
  )
}

export default page
