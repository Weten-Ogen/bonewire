"use client"
import Image from 'next/image'
import React from 'react'
import { del } from "@vercel/blob"
import { Button } from '@/components/ui/button'

const ImageCard = (props:any) => {
    const token ="vercel_blob_rw_l8YHwWsVKn8VKuaa_oXaXXm60iyBVV85qcNfGAUAUHOJixT"
    
    return (
    <>
    <div className=''>
      <Image 
          src={props.downloadUrl}
          width={200}
          height={200}
          alt={props.pathname}
          />
          <p className='text-wrap'>
            {props.downloadUrl}
          </p>

        <Button onClick={() => del(props.url,{
            token:token,
        })}>delete</Button>
    </div>
</>
  )
}

export default ImageCard
