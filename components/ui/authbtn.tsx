
import { signIn, signOut } from '@/auth'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Button } from 'react-day-picker'

interface authBtn {
    className?: string,
    label : string,
    type : string
}

const AuthBtn = ({label,type,className}:authBtn) => {
  
  return (
    <form className=''>
      <Button className='' onClick={async () => {
        if(type === "sign-in") {
         await signIn("google",{redirectTo: "/dashboard"})
        }
         await signOut()
      }}  type="submit">{label}</Button>
    </form>
  )
}



export default AuthBtn
