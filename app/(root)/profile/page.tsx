import React from 'react'
import Image from 'next/image';
import { getUserInfo } from '@/app/actions/authservice';
import { getuserbyid } from '@/app/actions/fetch';
import ProfileCard from './profile';



const Profile = async() => {
  
  return (
    <div className="">
      <ProfileCard/>    
    </div>
  )
}

export default Profile;

