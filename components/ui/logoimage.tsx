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
      <div>
    <Image
      width={40}
      height={40}
      className='object-cover h-auto' 
      src={HeroImg }
      alt={`${props.imageurl }image`}
      />
      </div>
    </Link>
  )
}

export default LogoImage
