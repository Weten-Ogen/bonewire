'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface authBtn {
    className?: string,
    label : string,
    reff : string
}

const AuthBtn = ({label,reff,className}:authBtn) => {
  
  return (
    <Link 
    href={reff} 
     className={cn('',className)}
     >
      <p>{label}</p>
    </Link>
  )
}



export default AuthBtn
