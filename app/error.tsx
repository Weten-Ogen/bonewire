"use client"
import { Button } from '@/components/ui/button'

import React from 'react'
import Back from './(admin)/admin/goback'

interface errorprops {
    error: Error
    reset : () => void
}

const errorPage = (props:errorprops) => {
  return (
    <section className=''>
     
      <Back/>
    </section>
  )
}

export default errorPage
