"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeft, ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Back = () => {

  const router = useRouter()
  const handleclick = () => {
    router.push("/")
    router.refresh()
  }

    return (
    <Button 
    variant="outline"
    onClick={handleclick} 
    className='capitalize border-none text-orange-600 font-bold mx-8 my-2 p-4 w-[40%] text-lg ' >
      <ArrowLeft />
      go to home screen
    </Button>
  )
}

export default Back
