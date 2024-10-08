import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import HeroImg from '@/public/asset/hero.png'

interface imagewithdevprops{
    className?: string,
    imageclass?:string,
    imagewidth?: number,
    imageheight?: number,
    imageurl: string,
    
}

const ImageWithDev =(props:imagewithdevprops) => (
  <div className={cn('max-w-[600px] w-[100%] h-auto relative',props.className)}>
    <Image
      src={HeroImg}
      alt={`${props.imageurl} image`}
      className={props.imageclass}      
      width={props.imagewidth ??800}                    
      height={props.imageheight ?? 800} 
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={true}
    />
  </div>
);


export default ImageWithDev