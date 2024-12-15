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
      <div>
        
      </div>
      <div>
        <Button onClick={props.reset}>Refresh</Button>
      </div>
      <Back/>
    </section>
  )
}

export default errorPage
