import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import HeroImg from '@/public/icon.png'
import Link from 'next/link'

interface logoimageprops{
    className: string,
    imageurl? :string | StaticImageData
}

const LogoImage = (props:logoimageprops) => {
  return (
    <Link href="/" className={cn('flex cursor-pointer items-end gap-2',props.className
    )}
    >
    <div className='object-cotain overflow-hidden'>
    <Image
      width={30}
      height={30}
      className='object-cover w-10 h-auto' 
      src={HeroImg }
      alt={`${props.imageurl }image`}
      />
      </div>
    </Link>
  )
}

export default LogoImage
