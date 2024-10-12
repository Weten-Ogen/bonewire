import Image from 'next/image'
import React from 'react'

const CoverProfile = () => {
  return (
    <div className='relative w-full h-[300px] bg-black overflow-hidden'>
      <Image 
       src=""
       alt="cover image picture"
       className='w-full h-auto object-cover '
       width={1000}
       height={1000}
      />
      <div className='absolute top-20 z-10 bg-black/75 w-full h-auto object-cover '/>
    </div>
  )
}

export default CoverProfile
