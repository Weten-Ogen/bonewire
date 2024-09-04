"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import Image from 'next/image'
import Link from 'next/link'

interface imageprops{
    pathname: string,
    url : string,
    downloadUrl: string,
    size: number,
    updatedAt:Date
}

const ImageCard = ({pathname,downloadUrl,size,updatedAt,url}:imageprops) => {
    const updated = new Date(updatedAt)
  return (
    <div className=''>
      <Card className=''>
        <CardContent className='flex flex-col items-center'>
            <Image  
            src={url}
            alt={pathname}
            width={200}
            height={200}
            className='aspect-square'
            />
            <CardTitle>pathname: {pathname}</CardTitle>
            <Link href={url}>url : {url}</Link>
            <CardDescription>downloadUrl: {downloadUrl}</CardDescription>
            <p>{updated.toUTCString()}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default ImageCard
