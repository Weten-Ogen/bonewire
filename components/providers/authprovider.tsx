"use client"
import React from 'react'

interface authprops {
  children: React.ReactNode
}
const AuthProvider = ({children}:authprops) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthProvider
