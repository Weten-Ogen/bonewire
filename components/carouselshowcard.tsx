'use client'
import React, { useEffect, useRef } from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

interface carprops {
    item: any,
    type: string,
    pauseCarousel?: () => void,
    resumeCarousel?: () => void
}

const CarouselShowCard = ({ item, type, pauseCarousel, resumeCarousel }: carprops) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handlePlay = () => {
        pauseCarousel?.()
      }

      const handleEnded = () => {
        resumeCarousel?.()
      }

      video.addEventListener('play', handlePlay)
      video.addEventListener('ended', handleEnded)

      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('ended', handleEnded)
      }
    }
  }, [pauseCarousel, resumeCarousel])

  return (
    <div className='md:w-[300px] md:h-[300px] w-full h-[60vh] object-contain'>
      {type === 'pic' ? (
        <Card className='w-full p-0'>
          <CardContent className='w-full p-0'>
            <Image
              src={item.imageurl}
              alt={item.imageurl}
              width={500}
              height={500}
              className='w-full object-contain'
            />
          </CardContent>
        </Card>
      ) : (
        <Card className='w-full p-0'>
          <CardContent className='w-full p-0'>
            <video
              ref={videoRef}
              width='1000'
              className='w-full  h-[50vh]  object-contain rounded-lg shadow-xl p-0'
              height='auto'
              muted
              autoPlay
            >
              <source src={item.videourl} type='video/mp4' />
            </video>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default CarouselShowCard
