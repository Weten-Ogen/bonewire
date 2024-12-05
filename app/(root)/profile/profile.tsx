"use client"
import { getUserInfo } from '@/app/actions/authservice';
import { getuserbyid } from '@/app/actions/fetch';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const ProfileCard = () => {
  const info = getUserInfo()
  const [user, setUser] = useState<any>(info);
  const [userinfo,setUserinfo] = useState<any>();
  
  const handleuserdetails = async() => {
    
    const fetcheddetails = await getuserbyid(user.id)
    setUserinfo((prev:any) =>prev =fetcheddetails.data)
    console.log(userinfo)
  }
  useEffect(() => {
    handleuserdetails()
    console.log(user)
    console.log(userinfo)
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
