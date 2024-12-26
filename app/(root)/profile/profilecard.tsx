"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProfileBg from '@/public/images/profile.png'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { getUserInfo } from '@/app/actions/authservice'
import { getuserbyid } from '@/app/actions/fetch'
import { useUserDetailsStore } from '@/store/userdetail'

interface userprops {
  className?: string

}

const ProfileCard = (props:userprops) => {
 const {user,deleteaccount,getUserdetails} = useUserDetailsStore()

 const router = useRouter()
 
 useEffect(() => {
  getUserdetails()
  
 },[])

 const newdate =user?.createdAt

   
  return (
    <div  className={cn('min-h-screen w-full md:flex  md:p-4 md:h-screen',props.className)}>
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
        <div className='flex items-center  justify-between gap-2'>
          <p className='text-2xl  font-bold font-sans'>
            Name 
          </p>
          <p className='capitalize text-2xl font-serif '>

          {user?.name}
          </p>
        </div>
        <div className='flex items-center justify-between  gap-2'>
          <p className='text-2xl  font-bold font-sans'>
            Country 
          </p>
          <p className='capitalize text-2xl font-serif '>

          {user?.country}
          </p>
        </div>
        <div className='flex items-center justify-between  gap-2 max-w-sm'>
          <p className='text-2xl  font-bold font-sans'>
            Email 
          </p>
          <p className=' text-2xl  font-serif '>

          {user?.email}
          </p>
        </div>
        <div className='flex items-center justify-between gap-2 text-wrap'>
          <p className='text-2xl  font-bold font-sans'>
            Address 
          </p>
          <p className='capitalize text-2xl font-serif  '>
          {user?.address}
          </p>
        </div>
        <div className='flex items-center justify-between  gap-2'>
          <p className='text-2xl  font-bold font-sans'>
            Joined in 
          </p>
          <p className=' text-2xl font-serif '>

          {newdate && user?.createdAt.toString().slice(0,10)}
          </p>
        </div>
        <div className='flex items-center justify-between  gap-2'>
          <p className='text-2xl  font-bold font-sans'>
            Contact 
          </p>
          <p className='capitalize text-2xl font-serif '>

          {user && user?.contactNumber}
          </p>
        </div>
          <div className='flex items-center gap-5 text-lg tracking-wider font-sans  pt-5'>
            <Button className='capitalize hover:-translate-y-0.5 ease-out duration-500 w-full '> 
            delete account
            </Button>
            <Button
            onClick={() => router.push('/')}
            className="capitalize hover:-translate-y-0.5 ease-out duration-500 w-full">
            go to home
            </Button>
          </div>
        </div>
    </div>
  )
}

export default ProfileCard
