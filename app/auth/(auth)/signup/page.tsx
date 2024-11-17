import SignUpForm from '@/app/forms/signupform'
import { TypographyH2 } from '@/components/typography/h2'
import LogoImage from '@/components/ui/logoimage'
import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <div className='w-full pt-16 px-4 py-6 '>
      <div className='flex flex-col items-center gap-4'>
        <LogoImage 
        className=''
        />
      <TypographyH2 className='text-3xl font-bold my-3'>
        Sign up for Bonewire 
      </TypographyH2>
      </div>
      <SignUpForm/>
    </div>
  )
}

export default page
