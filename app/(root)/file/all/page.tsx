
import React from 'react'
import {list} from '@vercel/blob';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import ImageCard from '@/components/ui/imagecard';

export default async function page ()  {
    const {blobs} = await list()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-16'>
      {blobs.map(item => {
        return (
            <ImageCard 
            key={item.pathname + item.url}
            downloadUrl={item.downloadUrl}
            pathname={item.pathname}
            size={item.size}
            updatedAt={item.uploadedAt}
            url={item.url}
            />
        )
      })}
    </div>
  )
}

