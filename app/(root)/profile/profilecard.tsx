"use client"
import { getUserInfo } from '@/app/actions/authservice'
import { getuserbyid } from '@/app/actions/fetch'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProfileCard = () => {
    const [user , setUser] = useState<any>()
    const router = useRouter()
 
   const handlefetchuser= async() => {
    setUser((prev:any) => getUserInfo())
    const userData =  await getuserbyid(user?.id)
    setUser((prev:any) => prev = userData)
   }
   useEffect(() => {
    handlefetchuser()
   },[])
   if(!user?.name) {
    router.back()
   }
    return (
    <div className=''>
      
    </div>
  )
}

export default ProfileCard
