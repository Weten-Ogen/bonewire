"use client"
import React from 'react'
import {SessionProvider}  from 'next-auth/react'
interface authprops {
  children: React.ReactNode
}
const AuthProvider = ({children}:authprops) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider
