"use client"
import { TypographyLarge } from '@/components/typography/large'
import { TypographyLead } from '@/components/typography/lead'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import profileImage from '@/public/images/profile.png'
import { cn } from '@/lib/utils'
import { getUserInfo } from '../actions/authservice'
import { getUserById } from '../actions/fetch'
import { toast } from 'sonner'

interface compprops {
    className?: string,
    user?:any
}

const ProfileCard = (props:compprops) => {
    const [user, setUser] = useState<any>()
    const [id, setId]  = useState<any>()

    
    
    const fetchdata = async() => {
        const useer = getUserInfo()
        setId((prev:any) => useer?.id)
        const data = await getUserById(id)
        console.log(data)
        if(!data.success) {
            toast('check your internet connectivity')
        }
    }

    useEffect(() => {
        fetchdata()
    })
    
    return (
    <div className={cn('h-[90vh]',props.className)}>
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
      <TypographyLead className='text-xl'>afjojo</TypographyLead>
      </div>
      <div className=' flex items-center gap-4'>
      <TypographyLarge className='text-2xl'>Email</TypographyLarge>
      <TypographyLead className='text-xl'>
        fdajejo
      </TypographyLead>
      </div>

      <div className=' flex items-center gap-4'>
      <TypographyLarge className='text-2xl'>Country</TypographyLarge>
      <TypographyLead className='text-xl'>
        asdhfeo
      </TypographyLead>
      </div>

      <div className=' flex items-center gap-4'>
      <TypographyLarge className='text-2xl'>Membership</TypographyLarge>
      <TypographyLead className='text-xl'>user name</TypographyLead>
      </div>

    </div>
  </div>
  )
}

export default ProfileCard
