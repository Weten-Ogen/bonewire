import CoverProfile from '@/components/sections/coverprofile';
import React from 'react'
import { getUserInfo } from '../actions/authservice';
import Image from 'next/image';
import { TypographyLarge } from '@/components/typography/small';
import { TypographyLead } from '@/components/typography/lead';
import { getproductsbyid } from '../actions/fetch';
import ProfileCard from './profilecardt';

const Profile = () => {

  return (
    <div>
      <ProfileCard
      />
    </div>
  )
}

export default Profile;

