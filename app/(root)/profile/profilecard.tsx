"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProfileBg from '@/public/images/profile.png'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useUserDetailsStore } from '@/store/userdetail'
import { updateUser } from '@/app/actions/user'
import {  getSession } from '@/app/actions/auth'

interface userprops {
  className?: string

}

const ProfileCard = (props:userprops) => {
  const {getUserdetails,user,session} = useUserDetailsStore()
  useEffect(() =>{getUserdetails()},[

  ])
  return (
    <div  className={cn('min-h-screen relative w-full md:flex  md:p-4 md:h-screen',props.className)}>
      <div className='max-w-full md:max-w-2xl  flex items-center justify-center bg-yellow-500 object-contain   '>
      <Image 
      src={ProfileBg}
      alt='profile bg'
      width={1000}
      height={1000}
      className='max-w-full h-auto object-cover'
      />
      
      </div>
      <div className='text-black pt-12 flex px-4 flex-col gap-4 w-full'>
        <div>
          <Image 
            src={session?.user?.image as string}
            alt={session?.user?.name as string}
            width={50}
            height={50}
            className='rounded-full h-10 w-10'
          />
        </div>
        <div className='flex items-center  justify-between gap-2'>
          <p className='text-primaryFont  font-bold font-poppins'>
            Name 
          </p>
          <p className='capitalize text-extraSmall  font-poppins'>
            {session?.user?.name}
         
          </p>
        </div>
        <div className='flex items-center justify-between  gap-2'>
          <p className='text-primaryFont  font-bold font-poppins'>
            Country 
          </p>
          <p className='capitalize text-extraSmall font-poppins'>

         
          </p>
        </div>
        <div className='flex items-center  justify-between  gap-2 '>
          <p className='text-primaryFont  font-bold font-poppins'>
            Email 
          </p>
          {
            session &&
          <p className=' text-extraSmall  font-poppins '>
            { session?.user?.email as string}
          </p>

          }
        </div>
        <div className='flex items-center justify-between gap-2 text-wrap'>
          <p className='text-primaryFont  font-bold font-poppins'>
            Address 
          </p>
          <p className='capitalize text-extraSmall font-poppins  '>
          </p>
        </div>
        <div className='flex items-center justify-between  gap-2'>
          <p className='text-primaryFont  font-bold font-poppins'>
            Joined in 
          </p>
          <p className=' text-extraSmall font-poppins '>
         
          </p>
        </div>
        <div className='flex items-center justify-between  gap-2'>
          <p className='text-primaryFont  font-bold font-poppins'>
            Contact 
          </p>
          <p className='capitalize text-extraSmall font-poppins '>
          
          </p>
        </div>
          <div className='flex items-center gap-5 text-lg tracking-wider font-sans  pt-5'>
            <Button className='capitalize font-poppins font-bold text-primaryFont hover:-translate-y-0.5 ease-out duration-500 w-full '> 
            delete account
            </Button>
            <Button
            
            className="capitalize hover:-translate-y-0.5 ease-out duration-500 w-full font-poppins text-primaryFont font-bold">
            go to home
            </Button>
          </div>
        </div>
        <form  className='absolute bottom-0 lg:right-0 m-4'>
        <Button type="submit" className=''>
          update Profile
        </Button>
      </form>
    </div>
  )
}

export default ProfileCard
