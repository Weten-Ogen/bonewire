import { getUserInfo } from '@/app/actions/authservice'
import { TypographyH2 } from '@/components/typography/h2'
import AdminCards from '@/components/ui/admincards'
import React from 'react'

const page = () => {
  return (
    <section className=''>
      {/* various call to action on the admin page */}
      <AdminCards/>
    </section>
  )
}

export default page
