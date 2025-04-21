"use client"
import React, { useEffect, useState } from 'react'
import ImageCard from './imagecard'
import { Button } from '@/components/ui/button'

const Imagegrid = (props:any) => {
 const [data, setData] = useState<any>([])
 const [loading,setLoading] = useState(false) 


 const getMore = async() => {
 }
 useEffect(() =>{
  setData(props.images)
 },[])


 return (
    <section className="flex flex-col gap-4 p-8 mx-auto">
        <div  className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center ' >
        {data.map((image:any) => <ImageCard  
        key={image.pathname + image.blob}
        {...image}
        />)}       
    </div>
   </section>
  )
}

export default Imagegrid
