import { signIn } from '@/auth'
import React from 'react'
import { Button } from './button'

const SignBtn = () => {
  return (
    <form action ={ async() => {
        await signIn("google",{redirectTo: '/dashboard'})
    }}>
      <Button type="submit">log in </Button>
    </form>
  )
}

export default SignBtn
