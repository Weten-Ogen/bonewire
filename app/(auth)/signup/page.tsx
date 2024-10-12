import SignUpForm from '@/components/forms/signupform'
import { TypographyH2 } from '@/components/typography/h2'
import LogoImage from '@/components/ui/logoimage'
import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <section className='w-full p-8'>
      <div className='flex flex-col items-center gap-4'>
        <LogoImage 
        className=''
        imageurl=""

        />
      <TypographyH2 className='text-3xl font-bold my-3'>
        Sign up for Bonewire 
      </TypographyH2>
      </div>
      <SignUpForm/>
    </section>
  )
}

export default page
