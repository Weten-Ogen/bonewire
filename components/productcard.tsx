"use client"

import { cn } from '@/lib/utils'
import React, { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card'
import Image, { StaticImageData } from 'next/image'
import { Button } from './ui/button'
import { TypographyMuted } from './typography/muted'
import Link from 'next/link'
import { TypographyH3 } from './typography/h3'
import { TypographyP } from './typography/p'
import { TypographyH4 } from './typography/h4'
import { useUserDetailsStore } from '@/store/userdetail'
import { useRouter } from 'next/navigation'

interface productcardprops{
className?: string,
id:string,   
label:string,
imageUrl:string | StaticImageData,
price: number ,
description:string
}

const ProductCard = (props:productcardprops) => {
  const {user,getUserdetails}  = useUserDetailsStore()
  const  router = useRouter()
  const convertedprice = parseFloat(props.price.toString()).toFixed(2)
  const dollarprice = Math.floor(props.price / 14.6 )
  const converteddollarprice = parseFloat(dollarprice.toString())

  useEffect(() => {
    getUserdetails()
  },[])

  return (
    <Link
     className='hover:-translate-y-0.5 hover:opacity-80 duration-500  rounded-b-lg max-w-lg  '
     href={`products/${props.id}`} >
    <div className={cn(' rounded-t-lg rounded-b-lg shadow-lg',props.className)}>
      <Card className="rounded-t-lg rounded-b-lg">
        <CardContent className='flex  gap-4 rounded-b-lg  items-start rounded-t-lg p-0'>
            <div className="max-w-full  max-h-[30vh]  md:max-w-full overflow-hidden p-4 mx-auto md:mx-0 md:p-0  rounded-t-lg  md:max-h-60 ">
                <Image 
                className='object-cover rounded-t-lg  max-w-full bg-gray-400 md:max-w-lg w-full max-h-[20vh] md:max-h-[40vh] h-auto'
                src={props.imageUrl}
                width={500}
                height={500}
                alt={`${props.label} image`}
                />
            </div>
            <div className='flex flex-col items-center px-4 py-2 relative min-h-auto'>

              <div className='flex flex-wrap w-full  items-center  '>
              <TypographyMuted className=' text-mediumFont text-primaryColor font-poppins font-bold pt-4 '>{props.label}</TypographyMuted>
              </div>
              <div className=' w-full py-4 '>
              {user?.country === "Ghana" || "Guest" ? 
              <TypographyMuted className='font-medium text-extraSmall text-slate-900 font-poppins'>GHC {convertedprice}</TypographyMuted> :
              <TypographyMuted className='font-medium font-poppins text-slate-900 text-extraSmall '>USD {converteddollarprice}</TypographyMuted>
            }
              </div>
              <div className='w-full pt-5 '>
                <Button className='font-bold capitalize tracking-wider w-full font-poppins text-extraSmall'
                onClick={() => {
                  router.push(`products/${props.id}`)
                }}
                >more</Button>
                
              </div>
            </div>
        </CardContent>
      </Card>
  </div>
  </Link>
  )}

export default ProductCard
