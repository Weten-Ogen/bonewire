import SignInForm from '@/components/forms/signinforms'
import { TypographyH2 } from '@/components/typography/h2'
import { TypographyMuted } from '@/components/typography/muted'
import LogoImage from '@/components/ui/logoimage'
import React from 'react'

const page = () => {
  return (
    <section  className='w-full p-8'>
      <div className='flex flex-col items-center gap-4'>
        <LogoImage 
        className=''
        imageurl=""

        />
      <TypographyH2 className='text-3xl font-bold my-3'>
        Log in for Bonewire 
      </TypographyH2>
      </div>
      <SignInForm 
      />
      
    </section>
  )
}

export default page
