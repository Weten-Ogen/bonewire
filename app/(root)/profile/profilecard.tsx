"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import ProfileBg from '@/public/images/profile.png'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface userprops {
  country : string,
  email: string,
  contact: string,
  name: string,
  address: string,
  className: string

}

const ProfileCard = (props:userprops) => {
  const router = useRouter();
  const handledelete = () => {

  }

  const handlehome = () => {
   router.push('/')
   router.refresh()  
  }

  return (
    <div  className={cn('min-h-screen md:h-screen grid grid-cols-1 md:grid-cols-2',props.className)}>
      <div className='max-w-2xl flex items-center justify-center  object-contain bg-black '>
      <Image 
      src={ProfileBg}
      alt='profile bg'
      width={1000}
      height={1000}
      className='max-w-full h-auto object-cover'
      />
      </div>
      <div className='text-black pt-12 flex px-4 flex-col gap-4 '>
        <div className='flex items-center  gap-2'>
          <p className='text-2xl  font-bold font-sans'>
            Name 
          </p>
          <p className='capitalize text-2xl font-serif '>

          {props.name}
          </p>
        </div>
        <div className='flex items-center  gap-2'>
          <p className='text-2xl  font-bold font-sans'>
            Country 
          </p>
          <p className='capitalize text-2xl font-serif '>

          {props.country}
          </p>
        </div>
        <div className='flex items-center  gap-2'>
          <p className='text-2xl  font-bold font-sans'>
            Email 
          </p>
          <p className=' text-2xl font-serif '>

          {props.email}
          </p>
        </div>
        <div className='flex items-center  gap-2 text-wrap'>
          <p className='text-2xl  font-bold font-sans'>
            Address 
          </p>
          <p className='capitalize text-2xl font-serif  '>
          {props.address}
          </p>
        </div>
        
        <div className='flex items-center  gap-2'>
          <p className='text-2xl  font-bold font-sans'>
            Contact 
          </p>
          <p className='capitalize text-2xl font-serif '>

          {props.contact}
          </p>
        </div>
          <div className='flex items-center gap-5 text-lg tracking-wider font-sans  '>
            <Button className='capitalize hover:-translate-y-0.5 ease-out duration-500 '> 
            delete account
            </Button>
            <Button
            className="capitalize hover:-translate-y-0.5 ease-out duration-500 "

            onClick={handlehome}>
            go to home
            </Button>
          </div>
        </div>
    </div>
  )
}

export default ProfileCard
