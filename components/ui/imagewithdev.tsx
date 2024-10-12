import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
// import HeroImg from '@/public/asset/hero.png'

interface imagewithdevprops{
    className?: string,
    imageclass?:string,
    imagewidth?: number,
    imageheight?: number,
    imageurl: string | StaticImageData,
    
}

const ImageWithDev =(props:imagewithdevprops) => (
  <div className={cn('max-w-[700px]  w-[98%] mx-auto h-auto relative overflow-hidden',props.className)}>
    <Image
      src={props.imageurl}
      alt={`${props.imageurl} image`}
      className="w-full h-auto rounded-lg  "      
      width={props.imagewidth ??500}                    
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      height={props.imageheight ?? 500} 
      priority={true}
    />
  </div>
);


export default ImageWithDev