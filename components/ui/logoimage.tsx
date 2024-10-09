import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
// import HeroImg from '@/public/asset/icon.png'
interface logoimageprops{
    className: string,
    imageurl? :string
}

const LogoImage = (props:logoimageprops) => {
  return (
    <div className={cn('flex items-end gap-2',props.className
    )}
    >
    <Image
    width={40}
    height={40}
      className='object-cover h-auto' 
      src={'/public/images/icon.png'}
      alt={`${props.imageurl }image`}
      />
      <p className='text-2xl italic font-bold'>Bonewire</p>
    </div>
  )
}

export default LogoImage
