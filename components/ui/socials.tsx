"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import facebookImage from '@/public/facebuk.png'
import tiktok from '@/public/tiktok.png'
import insta from  '@/public/insta.png'

interface socialprops{
  className?: string
}

const Socials = (props:socialprops) => {
  return (
    <div className={cn('',props.className)}>
      <Link 
      target='_blank'
      href="https://www.facebook.com/bonewire.shop"
      className=''>
        <Image 
        width={50}
        height={50}
        src={facebookImage}
        alt="facebook icon"
        />
      </Link>
      <Link 
      target='_blank'
      href="https://www.instagram.com/bonewire.shop"
      className=''>
        <Image 
        width={50}
        height={50}
        src={insta}
        alt="insta icon"
        />
      </Link>
      <Link 
      target='_blank'
      href="https://www.tiktok.com/@Bonewire.shop"
      className=''>
        <Image 
        width={50}
        height={50}
        src={tiktok}
        alt="tiktok icon"
        />
      </Link>
    </div>
  )
}

export default Socials

