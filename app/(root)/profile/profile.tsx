"use client"
import { getUserInfo } from '@/app/actions/authservice';
import { getuserbyid } from '@/app/actions/fetch';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const ProfileCard = () => {
  const [user, setUser] = useState<any>();
  const [userinfo,setUserinfo] = useState<any>();
  
  const handleuserdetails = async() => {
   
    const info = getUserInfo()
    console.log(info)
  }
  useEffect(() => {
    handleuserdetails()
    
  },[user])

    return (
    <div className=''>
      {/* <Image
       src={userinfo.imageurl}
       alt={userinfo.label}
       width={1000}
       height={500}
        /> */}
    </div>
  )
}

export default ProfileCard
