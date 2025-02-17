"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import facebookImage from '@/public/facebuk.png'
import tiktok from '@/public/tiktok.png'
import insta from  '@/public/insta.png'
import x from '@/public/x.png'
import Contactinfo from './contactinfo'

interface socialprops{
  className?: string
}

const Socials = (props:socialprops) => {
  return (
    <div className='max-w-full p-4 flex flex-col items-center justify-center' >
      <Contactinfo />
    <div className="flex items-center justify-center gap-4   p-2 w-full">
      <Link 
      target='_blank'
      href="https://www.facebook.com/bonewire.shop"
      className=''>
        <Image 
        width={32}
        height={32}
        src={facebookImage}
        alt="facebook icon"
        />
      </Link>
      <Link 
      target='_blank'
      href="https://www.instagram.com/bonewire.shop"
      className=''>
        <Image 
        width={32}
        height={32}
        src={insta}
        alt="insta icon"
        />
      </Link>
      <Link 
      target='_blank'
      href="https://www.x.com/@Bonewire_shop"
      className=''>
        <Image 
        width={32}
        height={32}
        src={x}
        alt="x icon"
        />
      </Link>
      
      <Link 
      target='_blank'
      href="https://www.tiktok.com/@Bonewire.shop"
      className=''>
        <Image 
        width={32}
        height={32}
        src={tiktok}
        alt="tiktok icon"
        />
      </Link>
    </div>
  </div>
  )
}

export default Socials

