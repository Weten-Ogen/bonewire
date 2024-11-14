"use client"
import CoverProfile from '@/components/sections/coverprofile';
import React from 'react'
import { getUserInfo } from '../actions/authservice';
import Image from 'next/image';
import profileImage from '@/public/images/profile.png'
import { TypographyLarge } from '@/components/typography/small';
import { TypographyLead } from '@/components/typography/lead';

const Profile = () => {
  const user = getUserInfo()
  
  return (
    <div className='mt-24 md:mt-14  h-[90vh] '>
      <div className='relative bg-black'>
        <Image 
        className="w-full  object-cover h-[50vh]"
        src={profileImage}
        alt="profile image"
        width={800}
        height={800}
        />
      </div>
      <div className='flex flex-col p-8'>
        <div className=' flex items-center gap-4'>
        <TypographyLarge className='text-2xl'>Name</TypographyLarge>
        <TypographyLead className='text-xl'>{user?.name}</TypographyLead>
        </div>
        <div className=' flex items-center gap-4'>
        <TypographyLarge className='text-2xl'>Email</TypographyLarge>
        <TypographyLead className='text-xl'>{user?.email}</TypographyLead>
        </div>

        <div className=' flex items-center gap-4'>
        <TypographyLarge className='text-2xl'>Country</TypographyLarge>
        <TypographyLead className='text-xl'>user name</TypographyLead>
        </div>

        <div className=' flex items-center gap-4'>
        <TypographyLarge className='text-2xl'>Membership</TypographyLarge>
        <TypographyLead className='text-xl'>user name</TypographyLead>
        </div>

      </div>
    </div>
  )
}

export default Profile;

