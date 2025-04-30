"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeft, ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface backprops {
  path?:string,
  className?: string,
  label?:string
}
const Back = (props:backprops) => {

  const router = useRouter()
  const handleclick = () => {
    if(props.path) {
      router.push(props.path)
      router.refresh()
      return
    }
    router.push("/")
    router.refresh()
  }

    return (
    <Button 
    variant="outline"
    onClick={handleclick} 
    className='capitalize border-none text-orange-600 font-bold mx-8 my-2 p-4 w-[40%] text-lg ' >
      <ArrowLeft />
     {props.label? props.label : "go back to home screen"}
    </Button>
  )
}

export default Back
